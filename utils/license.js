//do work to change use input to licenes
const makeShield = license => {
    console.log(license)
    //setup empty variable
    let shield
    //case switch to match the user input to the hard urls for the bades from shield.io
    switch(license){
        case 'MIT':
            shield = `[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)`;
            break;
        case "GPLv3":
            shield = `[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)`;
            break;
        case 'GPL':
        shield = `[![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)](http://perso.crans.org/besson/LICENSE.html)
        `;
        break;
        case "CC-0":
        shield = `[![CC-0 license](https://img.shields.io/badge/License-CC--0-blue.svg)](https://creativecommons.org/licenses/by-nd/4.0)
        `;
        break;
    }
    //return the given shield
    return shield
}

//export the function
module.exports = {
    makeShield,
}
