/* goal: หาเวลาที่ space จะดรอปทุก loop 
   loop droptime ให้เท่ากับ cycles ที่มี
*/

newCode2 = () => {
    const outputDiv = document.getElementById('output');

    const createContainer = (className) => {
        const container = document.createElement('div');
        container.className = className;
        return container;
    };

    const appendOutput = (container, text, className) => {
        const p = document.createElement('p');
        p.textContent = text;
        if (className) p.className = className;
        container.appendChild(p);
    };

    const timeCal = (hgDropTime, cycles, container) => { 
        const currentTime = new Date();
        const times = [];
    
        for (let i = 1; i <= cycles; i++) {
            const TL = new Date(currentTime.getTime() + (i * hgDropTime * 60 * 60 * 1000));
            times.push(TL);
        }
    
        const options = {
            hourCycle: 'h24',
            year: '2-digit', 
            month: '2-digit', 
            day: '2-digit', 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit'
        };
    
        times.forEach((time, index) => {
            appendOutput(container, `DropTime ${index + 1} = ${time.toLocaleString('en-US', options)}`, 'drop-time text-sm text-gray-400');
        });
    };
    
    class Spaces {
        rarity = " ";
        size = " ";
        cycles = 0;
        hgDropTime = 0;
        
        constructor(rarity, size, cycles, hgDropTime, customClass) {
          this.rarity = rarity;
          this.size = size;
          this.cycles = cycles;
          this.hgDropTime = hgDropTime;
          this.customClass = customClass;
          this.showDetail();
        }
    
        showDetail() {
            const container = createContainer(`content-box ${this.customClass}`);
            appendOutput(outputDiv, `------------------------------------------------------`);
            appendOutput(container, `Rarity: ${this.rarity} ${this.size} | Cycles: ${this.cycles}`, 'content-header');
            timeCal(this.hgDropTime, this.cycles, container, 'mt-50');
            outputDiv.appendChild(container);
        }
    }

    const oShow = () => {
        outputDiv.innerHTML = ''; // Clear previous content

        const sections = [
            { rarity: "Rare", cycles: [[9, 72], [10, 66], [11, 60]], color: 'bg-blue-500/50 w-96 text-center py-2 rounded' },
            { rarity: "Epic", cycles: [[10, 54], [11, 60], [12, 54]], color: 'bg-purple-500/50 w-96 text-center py-2 rounded' },
            { rarity: "Legend", cycles: [[11, 60], [12, 54], [14, 48]], color: 'bg-orange-500/50 w-96 text-center py-2 rounded' },
            { rarity: "Mythic", cycles: [[12, 54], [14, 48], [16, 42]], color: 'bg-yellow-500/50 w-96 text-center py-2 rounded' },
            { rarity: "Exalt", cycles: [[14, 48], [16, 42], [19, 36]], color: 'bg-pink-400/50 w-96 text-center py-2 rounded' },
        ];

        sections.forEach(section => {
            appendOutput(outputDiv, section.rarity.toUpperCase(), `text-4xl mt-10`);

            section.cycles.forEach(([cycles, hgDropTime], index) => {
                new Spaces(section.rarity, ['small', 'medium', 'large'][index], cycles, hgDropTime, section.color);
            });
        });
    }

    oShow();
}


newCode2()




