const container = document.getElementsByClassName('container')[0];
const invoker = document.getElementById("caster")
const roshan = document.getElementById("roshan")
const stats = document.getElementsByClassName('stats');
const invokeConstructor = [];
const sunStrikeskillIcon = document.getElementById('sunstrike')
const hp = document.getElementsByClassName("hp")
const mana = document.getElementsByClassName("mana")
const attack = document.getElementsByClassName("attack")
const armor = document.getElementsByClassName("armor")
const mArmor = document.getElementsByClassName("m-armor")
const step = document.getElementsByClassName("step")
const sunstrikeAudio = document.getElementById("sunstrikeAudio");
const meteorAudio = document.getElementById("meteorAudio");
const burningIcon = document.getElementsByClassName("effect-icon-burning")
var invokeCastSum = 0;
var alacrityStatus = false;
var alacrityTime = 5;
var alacrityCDTime = 0;
var meteorCDTime = 0;
var deafeningBlastCDTime = 0;
var sunstrikeCDTime = 0;
var cataclismCDTime = 0;
var burningStatus = false;
var burningTime = 15;
var disarmStatus = false;
var disarmTime = 2;
var bashEffect = false;
var invisibilityStatus = false;
var invisibilityTime = 2;



const quas = () => {
    invokeConstructor.push(1)
};

const wex = () => {
    invokeConstructor.push(5)
};

const exort = () => {
    invokeConstructor.push(10)
};

window.addEventListener('keyup', function (event) {
    if (event.keyCode === 81) {
        quas();
        invokeConstructorOverwhelmCheck()
        var quasIcon = document.createElement("img");
        quasIcon.src = 'skills/quas_icon.jpg';
        quasIcon.setAttribute("height", "100");
        quasIcon.setAttribute("width", "110");
        var qweInterface = document.getElementById("qwe-interface");
        qweInterface.appendChild(quasIcon);
        qweInterfaceFalseOrbsCheck()
        console.log(invokeConstructor)

    }
});
window.addEventListener('keyup', function (event) {
    if (event.keyCode === 87) {
        wex();
        invokeConstructorOverwhelmCheck()
        var wexIcon = document.createElement("img")
        wexIcon.src = 'skills/Wex_icon.png';
        wexIcon.setAttribute("height", "100");
        wexIcon.setAttribute("width", "110");
        var qweInterface = document.getElementById("qwe-interface");
        qweInterface.appendChild(wexIcon);
        qweInterfaceFalseOrbsCheck()
        console.log(invokeConstructor)
    }
});
window.addEventListener('keyup', function (event) {
    if (event.keyCode === 69) {
        exort();
        invokeConstructorOverwhelmCheck()
        var exortIcon = document.createElement("img")
        exortIcon.src = 'skills/Exort_icon.png';
        exortIcon.setAttribute("height", "100");
        exortIcon.setAttribute("width", "110");
        var qweInterface = document.getElementById("qwe-interface");
        qweInterface.appendChild(exortIcon);
        qweInterfaceFalseOrbsCheck()
        console.log(invokeConstructor)
    }
});

function invokeConstructorClean() {
    invokeConstructor.splice(0, invokeConstructor.length);
    invokeCastSum *= 0;
}

function qweInterfaceFalseOrbsCheck() {
    if (invokeConstructor.length <= 0) {
        clearBox("qwe-interface");
    }
}

function invokeConstructorOverwhelmCheck() {
    if (invokeConstructor.length > 3) {
        alert("you can't cast more than 3 orbs")
        clearBox("qwe-interface");
        invokeConstructorClean()
        return
    }
}

window.addEventListener('keyup', function (event) {
    if (event.keyCode === 82) {
        if (invokeConstructor.length <= 2) {
            alert("not enough orbs");
            clearBox("qwe-interface");
            invokeConstructorClean();
            return
        }

        for (let i = 0; i < invokeConstructor.length; i++) {
            invokeCastSum += invokeConstructor[i];
        }
        console.log(invokeCastSum)

        if (invokeCastSum === 30) {
            sunstrikeShow();
        } else {
            sunstrikeHide();
        }
        if (invokeCastSum === 25) {
            meteorShow();
        } else {
            meteorHide();
        }
        if (invokeCastSum === 20) {
            alacrityShow();
        } else {
            alacrityHide();
        }
        if (invokeCastSum === 16) {
            deafeningBlastShow();
        } else {
            deafeningBlastHide();
        }
        if (invokeConstructor.length >= 3) {
            invokeConstructorClean();

        }
        clearBox("qwe-interface");
    }
});


function clearBox(elementID) {
    document.getElementById(elementID).innerHTML = "";
}


class Hero {
    constructor(name, hp, mana, attack, armor, magicarmor, step, gold) {
        this.name = name;
        this.hp = hp;
        this.mana = mana;
        this.attack = attack;
        this.armor = armor;
        this.magicarmor = magicarmor;
        this.step = step;
        this.gold = gold;
    }
}

class Invoker extends Hero {}

class Roshan extends Hero {

}

const caster = new Invoker('Invoker', 2000, 2700, 75, 45, 45, 3, 10000);
const boss = new Roshan('Roshan', 8000, 0, 105, 0, 20, 2, 0);
const items = [caster, boss]

const renderFight = () => {
    renderHero();
    renderBoss();
}
const renderInterface = () => {
    renderHero();
    renderBoss();
}

const renderHero = (hero) => {
    let result = ''

    result = `<div class ="stats-invoker">
    <img src="/models/Invoker_model.png" alt="" id="invokerModel" class="invoker-model">
    <div class="effects-icons">
    <img src="/effects/disarm_effect.jpg" alt="" id = "disarmEffect" class = "effect-icon-disarm">
    </div>
      <p class ="name" >Name: ${caster.name},</p> 
      <p class = "hp">HP: ${caster.hp},</p> 
      <p class = "mana">Mana: ${caster.mana},</p>
      <p class = "attack">Attack: ${caster.attack},</p>
      <p class = "armor">Armor: ${caster.armor}</p>
      <p class = "steps">Steps: ${caster.step}</p>
      </div>`

    invoker.innerHTML = result;

    startgame.style.display = 'none';
    invokerAttackButton.style.display = 'block';
}
const renderBoss = (hero) => {
    let result = ''

    result = `<div class ="stats-roshan">
    <img src="/models/Roshan_model.png" alt="" id = "roshanModel" class = "roshan-model">
    
    <div class="effects-icons">
    <img src="/effects/disarm_effect.jpg" alt="" id = "disarmEffect" class = "effect-icon-disarm">
    <img src="/skills/Chaos_Meteor_icon.png" alt="" id = "burningEffect" class = "effect-icon-burning">
    </div>
      <p class ="name" >Name: ${boss.name},</p> 
      <p class = "hp">HP: ${boss.hp},</p> 
      <p class = "mana">Mana: ${boss.mana},</p>
      <p class = "attack">Attack: ${boss.attack},</p>
      <p class = "armor">Armor: ${boss.armor}</p>
      <p class = "steps">Steps: ${boss.step}</p>
      </div>`
    roshan.innerHTML = result;
}

function renderInvoker() {
    renderHero(caster)

}

function renderRoshan() {
    renderHero(boss)
}


function updateStats() {
    if (boss.step <= 0) {
        disarmTime = 0;
        disarmStatus = false;
        boss.attack = 105;
        newRound();
        updateStatsValue();
    } else if (caster.step <= 0) {
        let clapChance = chanceRandom(0, 100);
        disarmStatusCheck();
        if (clapChance <= 15) {
            clapAttack();
        } else {
            roshanAttack();
        }
        updateStatsValue();
    }
    if (alacrityCDTime >= 1) {
        alacrityCDTime -= 1;
    }
    if (meteorCDTime >= 1) {
        meteorCDTime -= 1;
    }
    if (deafeningBlastCDTime >= 1) {
        deafeningBlastCDTime -= 1;
    }
    if (sunstrikeCDTime >= 1) {
        sunstrikeCDTime -= 1;
    }
    if (cataclismCDTime >= 1) {
        cataclismCDTime -= 1;
    }
    updateStatsValue()
    gameOver();
}

function updateStatsValue() {
    stats.innerHTML = renderFight();
}

function invokerAttack() {
    if (alacrityTime === 0) {
        alacrityStatus = false;
        caster.attack = 75;
    }
    if (alacrityStatus = false) {
        caster.attack = 75;
    }
    if (alacrityStatus = true) {
        alacrityTime -= 1;
    }

    let critChance = chanceRandom(0, 100);
    if (critChance <= 15) {
        caster.attack *= 2;
        boss.hp = boss.hp - caster.attack;
        caster.step -= 1;
        console.log(caster.attack)
        caster.attack = 75;
    } else {
        boss.hp -= caster.attack;
        caster.step -= 1;
    }
    updateStatsValue()
    updateStats();

}

function roshanAttack() {
    let bashChance = chanceRandom(0, 100);
    let critChance = chanceRandom(0, 100);

    if (bashChance <= 15) {
        bashAttack();
    }
    if (critChance <= 15) {
        critAttack();
    }
    disarmStatusCheck();
    caster.hp = caster.hp - boss.attack;
    boss.step = boss.step - 1;
    burningStatusCheck()
    updateStats();
}

function bashAttack() {
    caster.step -= 3;
    caster.hp = caster.hp - boss.attack;
    boss.step = boss.step - 1;
    updateStats();
}

function critAttack() {
    boss.attack *= 2;
    caster.hp = caster.hp - boss.attack;
    boss.attack = 105;
    boss.step = boss.step - 1;
    updateStats();
}

function clapAttack(params) {
    caster.hp -= 270;
    boss.step = boss.step - 1;
    updateStats();
}



function chanceRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const stashItem1 = document.getElementById("stash-item-1");
const stashItem2 = document.getElementById("stash-item-2");

aghanimCataclism = () => {

}

function refresherOrbActivation() {
    cataclismCDTime = 0;
    meteorCDTime = 0;
    sunstrikeCDTime = 0;
    alacrityCDTime = 0;
    deafeningBlastCDTime = 0;
}

function sunstrikeSkill(params) {
    if (sunstrikeCDTime <= 0) {
        if (caster.mana < 180) {
            alert("Not enough mana")
            return
        }
        if (caster.step < 1) {
            alert("Not enough steps")
            return
        }
        boss.hp = boss.hp - 475;
        caster.mana = caster.mana - 180;
        sunstrikeAudio.play();
        caster.step -= 2;
        sunstrikeCDTime = 30;
        updateStats();
    } else if (sunstrikeCDTime >= 1) {
        alert(`this skill is on cooldown ${sunstrikeCDTime}`)
        return
    }
    updateStats();
}

function cataclismSkill(params) {
    if (cataclismCDTime <= 0) {
        if (caster.mana < 180) {
            alert("Not enough mana")
            return
        } else if (caster.step < 2) {
            alert("Not enough steps")
            return
        }

        boss.hp = boss.hp - 537 * 2;
        caster.mana = caster.mana - 180;
        caster.step -= 3;
        sunstrikeAudio.play();
        updateStats();
    } else if (sunstrikeCDTime >= 1) {
        alert(`this skill is on cooldown ${cataclismCDTime}`)
        return
    }

}

function deafeningBlastSkill() {
    if (deafeningBlastCDTime <= 0) {
        if (caster.step < 2) {
            alert("Not enough steps")
            return
        }
        boss.hp -= 260;
        caster.mana -= 300;
        caster.step -= 2;
        disarmStatus = true;
        disarmTime = 2;
        deafeningBlastCDTime = 30;
        updateStats();
    } else if (deafeningBlastCDTime >= 1) {
        alert(`this skill is on cooldown ${deafeningBlastCDTime}`)
        return
    }
}

function disarmStatusCheck() {
    if (disarmTime === 0) {
        disarmStatus = false;
    }
    if (disarmStatus = true) {
        boss.attack = 0;
        disarmTime -= 1;
        boss.step = boss.step - 1;
        updateStats();
    }
}



function meteorSkill(params) {
    if (meteorCDTime <= 0) {
        if (caster.step < 2) {
            alert("Not enough steps")
            return
        }
        boss.hp = boss.hp - 275;
        caster.mana = caster.mana - 100;
        caster.step -= 2;
        burningTime = 15;
        burningStatus = true;
        meteorAudio.play();
        updateStats();
        meteorCDTime = 25;
        updateStats();
    } else if (meteorCDTime >= 1) {
        alert(`this skill is on cooldown ${meteorCDTime}`)
        return
    }

}

function burningStatusCheck(params) {
    if (burningStatus = true) {
        burningTime -= 1;
        burningEffect.style.display = "block"
        burning();
    }
}

function burning() {
    boss.hp -= 105;
}

function alacritySkill(params) {
    alacrityStatus = true;
    caster.attack = caster.attack + 150;
    caster.mana = caster.mana - 100;
    console.log(alacrityStatus)
    updateStats();
}



function sunstrikeShow(params) {
    sunstrike.style.display = 'block'
}

function sunstrikeHide(params) {
    sunstrike.style.display = 'none'
}

function deafeningBlastShow() {
    deafeningBlast.style.display = 'block'
}

function deafeningBlastHide(params) {
    deafeningBlast.style.display = 'none'
}

function alacrityShow(params) {
    alacrity.style.display = 'block'
}

function alacrityHide(params) {
    alacrity.style.display = 'none'
}

function meteorShow(params) {
    chaosMeteor.style.display = 'block'
}

function meteorHide(params) {
    chaosMeteor.style.display = 'none'
}



function newRound() {
    caster.step = 3;
    boss.step = 2;
    caster.mana += 20;
    updateStats();
}


function gameOver() {
    if (boss.hp <= 0) {
        alert("you win")
        boss.hp = 0;
    } else if (caster.hp <= 0) {
        alert("you lose")
        caster.hp = 0;
    }
}