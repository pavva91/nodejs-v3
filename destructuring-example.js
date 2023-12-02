const data = {
    shooting: 99,
    dribbling: 50,
    jumping: 30,
}

// These 2 calls can be substituted by destructuring
// const jumping = data.jumping
// const dribbling = data.dribbling

const { shooting, jumping } = data

// Destructuring also works with arrays
const nums = [1, 'abc', 3, 4, null, undefined, 7.99]
const [first, , pippo, , , , last] = nums
const [, second] = nums
const [head, , ...rest] = nums

console.log(shooting)
console.log(jumping)
console.log(first)
console.log(second)
console.log(pippo)
console.log(last)
console.log(head)
console.log(rest)
