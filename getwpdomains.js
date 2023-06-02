/**
 * Get wp domains from wp network
 * run this code in the browser console
 */

function getWpSitesDomains() {
    const tableDomains = document.querySelectorAll('td.blogname a.edit');
    const domains = Array.from(tableDomains).map(domain => domain.innerText);
    return domains
}

getWpSitesDomains()
