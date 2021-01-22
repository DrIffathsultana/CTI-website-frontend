const orgs = [
  { name: "democracylab", id: 5304021 },
  { name: "codeforamerica", id: 337792 },
  { name: "codeforanchorage", id: 3999742 },
  { name: "codefortucson", id: 5103176 },
  { name: "codeforfresno", id: 13583607 },
  { name: "code4sac", id: 3915088 },
  { name: "sfbrigade", id: 3926630 },
  { name: "codeforsanjose", id: 6627417 },
  { name: "hackforla", id: 11635254 },
  { name: "openoakland", id: 2238933 },
  { name: "opensandiego", id: 363945 },
  { name: "opensmc", id: 16023997 },
  { name: "codeforboulder", id: 6794815 },
  { name: "codefordenver", id: 7472092 },
  { name: "codeforfoco", id: 18219957 },
  { name: "codeforct", id: 50676221 },
  { name: "opendatade", id: 14185206 },
  { name: "codefordc", id: 2768897 },
  { name: "codeforftl", id: 5661283 },
  // { name: 'code -for-miami', id: NA },
  { name: "cforlando", id: 5225505 },
  { name: "codefortallahassee", id: 17890912 },
  { name: "code-for-tb", id: 9374504 },
  { name: "codeforatlanta", id: 5956025 },
  { name: "opensavannah", id: 23719460 },
  { name: "codeforhawaii", id: 6244195 },
  { name: "codeforboise", id: 11685547 },
  { name: "chicago", id: 838189 },
  { name: "bmghack", id: 28742394 },
  { name: "hackmichiana", id: 5560123 },
  { name: "codeforkyana", id: 43117709 },
  { name: "codefornola", id: 13694692 },
  { name: "openmaine", id: 31015387 },
  { name: "codeforbaltimore", id: 23199310 },
  { name: "codeforboston", id: 2533182 },
  { name: "codeforlansing", id: 53883451 },
  { name: "opentwincities", id: 2691793 },
  { name: "codeforkansascity", id: 5272305 },
  { name: "openstl", id: 5983880 },
  { name: "code-for-montana", id: 54483192 },
  { name: "codeforvegas", id: 8881191 },
  { name: "codefornh", id: 15762830 },
  { name: "codeforjerseycity", id: 6127403 },
  { name: "code4newark", id: 17065281 },
  { name: "codeforabq", id: 12041066 },
  { name: "betanyc", id: 3756624 },
  { name: "codeforbuffalo", id: 36050070 },
  { name: "code-for-syracuse", id: 50877232 },
  { name: "codeforasheville", id: 3941752 },
  { name: "codeforcary", id: 4837138 },
  { name: "code-for-chapel-hill", id: 47088442 },
  { name: "codefordurham", id: 5732447 },
  { name: "codeforgso", id: 11655503 },
  { name: "opencltbrigade", id: 7139543 },
  { name: "open-nc", id: 24854789 },
  { name: "ncopenpass", id: 2907565 },
  { name: "codefordayton", id: 6026408 },
  { name: "opencleveland", id: 9359323 },
  { name: "opentoledo", id: 17861929 },
  { name: "scodemeetup", id: 39891022 },
  { name: "codeformuskogee", id: 34636185 },
  { name: "codefortulsa", id: 4308649 },
  { name: "codeforpdx", id: 39497980 },
  { name: "openeugene", id: 37278948 },
  { name: "codeforphilly", id: 1451716 },
  { name: "codeforpittsburgh", id: 7076673 },
  { name: "code4puertorico", id: 6626422 },
  { name: "codeisland", id: 6508208 },
  { name: "codeforgreenville", id: 7353466 },
  { name: "code-for-nashville", id: 8493450 },
  { name: "open-austin", id: 970084 },
  { name: "sketch-city", id: 7483869 },
  // { name: 'opensaltlake', id: NA },
  { name: "codeforbtv", id: 3893216 },
  { name: "code-for-charlottesville", id: 47369979 },
  { name: "code4hr", id: 1490563 },
  { name: "codefornrv", id: 10054894 },
  { name: "openseattle", id: 3466034 },
  { name: "codeformilwaukee", id: 50022592 },
  { name: "code-for-canada", id: 32721448 },
  { name: "civictechto", id: 13970794 },
  { name: "yowct", id: 25335669 },
  { name: "civictechwr", id: 29664172 },
  { name: "civictechfredericton", id: 33107366 },
  { name: "civictechyyc", id: 36767149 },
  { name: "opendatabc", id: 1002534 },
  { name: "codeforjapan", id: 5137738 },
  { name: "codefortokyo", id: 10110858 },
  { name: "codeforsapporo", id: 5637003 },
  { name: "codeforhakodate", id: 8735805 },
  { name: "muroran", id: 10561219 },
  { name: "howml", id: 11631697 },
  { name: "codefortoda", id: 45053721 },
  { name: "codeforichikawa", id: 22729568 },
  { name: "codeforchiba", id: 9192544 },
  { name: "codeforsetagaya", id: 6940927 },
  { name: "codefortoshima", id: 17681119 },
  { name: "code4nerima", id: 35978674 },
  { name: "codeforchofu", id: 7628029 },
  { name: "code48", id: 8231753 },
  { name: "openkawasaki", id: 7857102 },
  { name: "codeforyokosuka", id: 23724204 },
  { name: "codeforniigata", id: 14312166 },
  { name: "codeforkanazawa-org", id: 5687728 },
  { name: "code4sabae", id: 40041955 },
  { name: "code-for-gifu", id: 34079961 },
  { name: "code4aichi", id: 36985174 },
  { name: "code4nagoya", id: 10399396 },
  { name: "open-osaka(notsure)", id: 24203651 },
  { name: "codeforamagasaki", id: 22439505 },
  { name: "codeforkobe", id: 10889832 },
  { name: "code4nara", id: 18328349 },
  { name: "code4ikoma", id: 11582910 },
  { name: "code4hiroshima", id: 13003502 },
  { name: "codeforokinawa", id: 7360004 },
  { name: "codeforjapan", id: 5137738 },
  { name: "codeforyouth", id: 32522544 },
  { name: "codeforafrica", id: 2786364 },
  { name: "code4salone", id: 15065220 },
  { name: "codeforafrica", id: 2786364 },
  { name: "codeforaustralia", id: 2573081 },
  { name: "codeforgermany", id: 6952379 },
  { name: "codeforberlin", id: 17669902 },
  { name: "oklabbonn", id: 11390108 },
  { name: "codeforchemnitz", id: 7165089 },
  { name: "codeforgiessen", id: 8227138 },
  { name: "codeforhamburg", id: 7387840 },
  { name: "codeforkarlsruhe", id: 10452685 },
  { name: "codeforleipzig", id: 7286986 },
  { name: "code-for-magdeburg", id: 10670382 },
  { name: "codeformuenster", id: 6464842 },
  { name: "codeforniederrhein", id: 16598573 },
  { name: "codeforosnabrueck", id: 30509575 },
  { name: "open-data-potsdam", id: 19558368 },
  { name: "codeforruhrgebiet", id: 17032365 },
  { name: "opendata-stuttgart", id: 11635590 },
  { name: "ulmapi", id: 985867 },
  { name: "opendatal", id: 7932972 },
  { name: "epforgpl", id: 3350223 },
  { name: "codeforpakistan", id: 4421892 },
  { name: "code4romania", id: 18010308 },
  { name: "openupsa", id: 26482663 },
  { name: "slashroots", id: 693298 },
  { name: "codefornl", id: 16212776 },
  { name: "codeandomexico", id: 2940113 },
  { name: "g0v", id: 2668086 },
  { name: "ciudadanointeligente", id: 631035 },
  { name: "mysociety", id: 141338 },
  { name: "civictechsweden", id: 44578964 },
  { name: "opendatakosovo", id: 7871676 },
  { name: "sinar", id: 1127396 },
  { name: "waagsociety", id: 895755 },
  { name: "openknowledgebe", id: 1188392 },
  { name: "code4moldova", id: 52112511 },
];
  /*
   *  let orgsFiltered = orgs.filter((org)=>org.name.includes('c'))
   * console.log(`orgs: ${orgs.length}, orgsFilterd: ${orgsFiltered.length}`);
   */
export const names = new Map();

for (const org of orgs) {
  names.set(org.name, org.id);
}