import Attendee from "./attendee.js"

export default class Room {
    constructor({ id, topic, attendeesCount, speakersCount, featuredAttendee, owner, users}) {

        this.id = id
        this.topic = topic
        this.attendeesCount = attendeesCount
        this.speakersCount = speakersCount
        this.featuredAttendee = featuredAttendee?.map(attendee => new Attendee(attendee))
        this.owner = new Attendee(owner)
        this.users = users

    }
}