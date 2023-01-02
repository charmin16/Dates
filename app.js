const now = new Date()
console.log(now)

// console.log('getFullYear:', now.getFullYear());
// console.log('getMonth:', now.getMonth());
// console.log('getDate:', now.getDate());
// console.log('getDay:', now.getDay());
// console.log('getHours:', now.getHours());
// console.log('getMinutes:', now.getMinutes());
// console.log('getSeconds:', now.getSeconds());

console.log(now.toLocaleString('en-US', { month: 'long' }))
console.log(now.toLocaleString('en-US', {month: 'short'}))

// time stamps 
console.log('timestamps:', now.getTime())

// date strings 
// console.log(now.toDateString())
// console.log(now.toTimeString())
// console.log(now.toLocaleString())
// console.log(now.toLocaleDateString())

// Timestamps and comparisons 

const before = new Date('February 1 2022 8:30:45')
const dec = new Date('December 3 2021')

// console.log(before.getTime())

const diff = (now.getTime() - before.getTime())

const seconds = Math.round(diff / 1000)
const mins = Math.round(seconds / 60)
const hours = Math.round(mins / 60)
const days = Math.round(hours / 24)
const months = Math.round(days/30)

console.log(hours, days, months)

console.log(`The number of months since publishiing is ${months}months`)
console.log(dec.getTime())

const timestamp = 1638486000000
console.log(new Date(timestamp))

const nov = new Date('2022-09-02 8:42')
const nove = new Date('2022-10')
console.log(nov)
console.log(nove)

