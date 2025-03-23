let readability_enabled = false
var r = document.querySelector(':root');

function get_root_var() {
    // Get the styles (properties and values) for the root
    var rs = getComputedStyle(r);
    
    return [rs.getPropertyValue('--p-f'), rs.getPropertyValue('--t-f')];
}

function toggle_readability(mode) {
    if ((mode == true) || (readability_enabled == false)) {
        readability_enabled = true
        r.style.setProperty('--p-f', "'Atkinson Hyperlegible', sans-serif");
        r.style.setProperty('--t-f', "'OpenDyslexic', sans-serif");
    } else if ((mode == false) || (readability_enabled == true)) {
        readability_enabled = false
        r.style.setProperty('--p-f', "'Source Sans Pro', 'Source Sans 3', sans-serif");
        r.style.setProperty('--t-f', "'Montserrat', sans-serif");
    }
}