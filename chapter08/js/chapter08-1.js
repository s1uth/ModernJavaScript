const year = document.querySelector('#year')
const month = document.querySelector('#month')
const day = document.querySelector('#date')

const btn = document.querySelector('#bttn')

const days = document.querySelector('#days')
const hours = document .querySelector('#hours')
const current = document.querySelector('#current')


const daycal = (time) => { Math.round( time / ( 1000 * 60 * 60 * 24 )) }
const hourcal = (time) => { Math.round( time / ( 1000 * 60 * 60 )) }

btn.onclick = () =>{
    
    const toDay = new Date()
    const birthDay = new Date(year.value, month.value, day.value);

    const lateDate = toDay.getTime() - birthDay.getTime()
    
    current.innerText = `${toDay.toDateString()} 현재`
    days.innerText =`날짜로는  ${daycal(lateDate)} 일이 흐르고, `
    hours.innerText = `시간으로는 ${hourcal(lateDate)} 시간이 흘렀습니다.`
}