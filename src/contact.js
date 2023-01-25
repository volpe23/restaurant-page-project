import './styles/contactStyle.scss'

class WorkHour {
    constructor(day, startHour, endHour) {
        this.day = day;
        this.startHour = String(startHour);
        this.endHour = String(endHour);
    }

    setWorkHour() {
        return `${this.day} : ${this.startHour.padStart(2, '0')}:00 - ${this.endHour.padStart(2, '0')}:00`;
    }
}

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const workDayHours = days.map((day, i) => {
    // const start = 12;
    let end;
    i > 3 ? end = 23 : end = 22;
    return new WorkHour(day, 12, end).setWorkHour();
})


const createContacts = () => {
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contacts');

    const workHours = document.createElement('ul');
    workHours.classList.add('work');

    workDayHours.forEach(day => {
        const li = document.createElement('li');
        li.textContent = day;
        workHours.append(li);
    })

    const map = document.createElement('iframe');
    map.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29569.66952635364!2d12.227015156333524!3d41.756028917933996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1325fb1d165df417%3A0xab7d6dc5bcc9bd0d!2sDa%20Cacio%20e%20Pepe!5e0!3m2!1slv!2slv!4v1674654871204!5m2!1slv!2slv'
    map.width = 500;
    map.height = 300;
    map.referrerPolicy = 'no-referrer-when-downgrade';

{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29569.66952635364!2d12.227015156333524!3d41.756028917933996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1325fb1d165df417%3A0xab7d6dc5bcc9bd0d!2sDa%20Cacio%20e%20Pepe!5e0!3m2!1slv!2slv!4v1674654871204!5m2!1slv!2slv"
 width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
    contactDiv.append(workHours, map);

    return contactDiv;
}

export {
    createContacts
}