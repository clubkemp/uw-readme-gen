const makeShield = license => {
    console.log(license)
    let shield
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
    return shield
}

module.exports = {
    makeShield,
}
