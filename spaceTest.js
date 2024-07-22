/* goal: หาเวลาที่ space จะดรอปทุก loop 
   loop droptime ให้เท่ากับ cycles ที่มี
*/


originalCode = () => {
    timeCal = (hrDT) => { 
        const currentTime = new Date();
        const TL1 = new Date(currentTime.getTime() + (hrDT * 60 * 60 * 1000)); //current time timestamp + hrDT timestamp
        const TL2 = new Date(TL1.getTime() + (hrDT * 60 * 60 * 1000)); //TL1 timestamp + hrDT timestamp 
        const TL3 = new Date(TL2.getTime() + (hrDT * 60 * 60 * 1000)); //TL2 timestamp + hrDT timestamp 
        const TL4 = new Date(TL3.getTime() + (hrDT * 60 * 60 * 1000)); //TL2 timestamp + hrDT timestamp 
        const TL5 = new Date(TL4.getTime() + (hrDT * 60 * 60 * 1000)); //TL2 timestamp + hrDT timestamp 
        const TL6 = new Date(TL5.getTime() + (hrDT * 60 * 60 * 1000)); //TL2 timestamp + hrDT timestamp 
        const TL7 = new Date(TL6.getTime() + (hrDT * 60 * 60 * 1000)); //TL2 timestamp + hrDT timestamp 
        const TL8 = new Date(TL7.getTime() + (hrDT * 60 * 60 * 1000)); //TL2 timestamp + hrDT timestamp 
        const TL9 = new Date(TL8.getTime() + (hrDT * 60 * 60 * 1000)); //TL2 timestamp + hrDT timestamp 
    
        // Format the output
        const options = {
                        hourCycle: 'h12',
                        year: '2-digit', 
                        month: '2-digit', 
                        day: '2-digit', 
                        hour: '2-digit', 
                        minute: '2-digit', 
                        second: '2-digit'};
        const dropTime = TL1.toLocaleString('en-US', options);
        const dropTime2 = TL2.toLocaleString('en-US', options);
        const dropTime3 = TL3.toLocaleString('en-US', options);
        const dropTime4 = TL3.toLocaleString('en-US', options);
        const dropTime5 = TL4.toLocaleString('en-US', options);
        const dropTime6 = TL5.toLocaleString('en-US', options);
        const dropTime7 = TL6.toLocaleString('en-US', options);
        const dropTime8 = TL7.toLocaleString('en-US', options);
        const dropTime9 = TL8.toLocaleString('en-US', options);
    
        console.log(`DropTime 1 = ${dropTime}`)
        console.log(`DropTime 2 = ${dropTime2}`)
        console.log(`DropTime 3 = ${dropTime3}`)
        console.log(`DropTime 4 = ${dropTime4}`)
        console.log(`DropTime 5 = ${dropTime5}`)
        console.log(`DropTime 6 = ${dropTime6}`)
        console.log(`DropTime 7 = ${dropTime7}`)
        console.log(`DropTime 8 = ${dropTime8}`)
        console.log(`DropTime 9 = ${dropTime9}`)
    }
    
    class Spaces {
        rarity = " ";
        size = " ";
        cycles = 0;
        hrDT = 0;
        
        constructor(rarity, size, cycles, hrDT) {
          this.rarity = rarity; // rare, epic, legend, mythic, exalt
          this.size = size; //small, medium, large
          this.cycles = cycles;
          this.hrDT = hrDT;
          this.showDetail();
        }
    
        showDetail(){
            console.log(`Rarity: ${this.rarity} ${this.size} \nCycles: ${this.cycles}`)
            timeCal(this.hrDT)
            console.log("\n--------------")
        }
    
    
      }
    
    const rareS = new Spaces("rare", "small", 9, 77)
    const rareM = new Spaces("rare", "medium", 10, 66)
    const rareL = new Spaces("rare", "large", 11, 60)
}
newCode = () => {
    const timeCal = (hrDT, cycles) => { 
        const currentTime = new Date(); //เวลาใหม่
        const times = []; //arrays ไว้รับ loop time
    
        for (let i = 1; i <= cycles; i++) {
            const TL = new Date(currentTime.getTime() + (i * hrDT * 60 * 60 * 1000));
            times.push(TL);
        }
    
        // Format the output
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
            console.log(`DropTime ${index + 1} = ${time.toLocaleString('en-US', options)}`);
        });
    };
    
    class Spaces {
        // build property
        rarity = " ";
        size = " ";
        cycles = 0;
        hrDT = 0;
        
        constructor(rarity, size, cycles, hrDT) {
          this.rarity = rarity; // rare, epic, legend, mythic, exalt
          this.size = size; // small, medium, large
          this.cycles = cycles;
          this.hrDT = hrDT;
          this.showDetail();
          console.log(" ")
        }
    
        showDetail(){
            console.log(`Rarity: ${this.rarity} ${this.size} \nCycles: ${this.cycles}`);
            timeCal(this.hrDT, this.cycles);
        }
    }

    oShow = () =>{
        console.log("\nถ้าวาง space ตอนนี้\ncycles คำนวนต่อเดือน \n")
        const rareS = new Spaces("Rare", "small", 9, 72);
        const rareM = new Spaces("Rare", "medium", 10, 66);
        const rareL = new Spaces("Rare", "large", 11, 60);
        console.log("-------------------------------------")
        const epicS = new Spaces("Epic", "small", 10, 54);
        const epicM = new Spaces("Epic", "medium", 11, 60);
        const epicL = new Spaces("Epic", "large", 12, 54);
        console.log("-------------------------------------")
        const legS = new Spaces("Legend", "small", 11, 60);
        const legM = new Spaces("Legend", "medium", 12, 54);
        const legL = new Spaces("Legend", "large", 14, 48);
    }
   
    return oShow();
}
newCode2 = () => {
    const outputDiv = document.getElementById('output');

    const createContainer = () => {
        const container = document.createElement('div');
        container.className = 'space-container';
        return container;
    };

    const appendOutput = (container, text, className) => {
        const p = document.createElement('p');
        p.textContent = text;
        if (className) p.className = className;
        container.appendChild(p);
    };

    const timeCal = (hrDT, cycles, container) => { 
        const currentTime = new Date();
        const times = [];
    
        for (let i = 1; i <= cycles; i++) {
            const TL = new Date(currentTime.getTime() + (i * hrDT * 60 * 60 * 1000));
            times.push(TL);
        }
    
        // Format the output
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
            appendOutput(container, `  DropTime ${index + 1} = ${time.toLocaleString('en-US', options)}`, 'drop-time');
        });
    };
    
    class Spaces {
        rarity = " ";
        size = " ";
        cycles = 0;
        hrDT = 0;
        
        constructor(rarity, size, cycles, hrDT) {
          this.rarity = rarity;
          this.size = size;
          this.cycles = cycles;
          this.hrDT = hrDT;
          this.showDetail();
        }
    
        showDetail() {
            const container = createContainer();
            appendOutput(container, `Rarity: ${this.rarity} ${this.size} | Cycles: ${this.cycles}`, 'space-header');
            timeCal(this.hrDT, this.cycles, container);
            outputDiv.appendChild(container);
        }
    }

    const oShow = () => {
        appendOutput(outputDiv, "ถ้าวาง space ตอนนี้ | Cycles คำนวณต่อเดือน");
        appendOutput(outputDiv, "------------------------------------------------------");
        appendOutput(outputDiv, "RARE");
        new Spaces("Rare", "small", 9, 72);
        appendOutput(outputDiv, "-");
        new Spaces("Rare", "medium", 10, 66);
        appendOutput(outputDiv, "-");
        new Spaces("Rare", "large", 11, 60);
        appendOutput(outputDiv, "-");
        appendOutput(outputDiv, "------------------------------------------------------");
        appendOutput(outputDiv, "EPIC");
        new Spaces("Epic", "small", 10, 54);
        appendOutput(outputDiv, "-");
        new Spaces("Epic", "medium", 11, 60);
        appendOutput(outputDiv, "-");
        new Spaces("Epic", "large", 12, 54);
        appendOutput(outputDiv, "-");
        appendOutput(outputDiv, "------------------------------------------------------");
        appendOutput(outputDiv, "LEGEND");
        new Spaces("Legend", "small", 11, 60);
        appendOutput(outputDiv, "-");
        new Spaces("Legend", "medium", 12, 54);
        appendOutput(outputDiv, "-");
        new Spaces("Legend", "large", 14, 48);
        appendOutput(outputDiv, "-");
        appendOutput(outputDiv, "------------------------------------------------------");
        appendOutput(outputDiv, "MYTHIC");
        new Spaces("Mythic", "small", 12, 54);
        appendOutput(outputDiv, "-");
        new Spaces("Mythic", "medium", 14, 48);
        appendOutput(outputDiv, "-");
        new Spaces("Mythic", "large", 16, 42);
        appendOutput(outputDiv, "-");
        appendOutput(outputDiv, "------------------------------------------------------");
        appendOutput(outputDiv, "EXALT");
        new Spaces("Exalt", "small", 14, 48);
        appendOutput(outputDiv, "-");
        new Spaces("Exalt", "medium", 16, 42);
        appendOutput(outputDiv, "-");
        new Spaces("Exalt", "large", 19, 36);
        appendOutput(outputDiv, "-");
    }
   
    oShow();
}


newCode2()




