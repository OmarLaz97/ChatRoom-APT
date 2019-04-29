import React from 'react'
import { Header, Image } from 'semantic-ui-react'
import "./userStrip.css";

const urls = [
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fsemantic-ui.com%2Fimages%2Favatar%2Flarge%2Fjoe.jpg&imgrefurl=https%3A%2F%2Fsemantic-ui.com%2Fkitchen-sink.html&docid=URV2oOY9yvsKcM&tbnid=049EmV2N_fA2aM%3A&vet=10ahUKEwit8PKSmfbhAhVyqHEKHRQKCR4QMwg2KAAwAA..i&w=650&h=650&bih=688&biw=1280&q=semantic%20ui%20avatar%20images&ved=0ahUKEwit8PKSmfbhAhVyqHEKHRQKCR4QMwg2KAAwAA&iact=mrc&uact=8",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fsemantic-ui.com%2Fimages%2Favatar%2Flarge%2Felliot.jpg&imgrefurl=https%3A%2F%2Fsemantic-ui.com%2Fkitchen-sink.html&docid=URV2oOY9yvsKcM&tbnid=ZAh-Uo_-SrHeFM%3A&vet=10ahUKEwit8PKSmfbhAhVyqHEKHRQKCR4QMwg3KAEwAQ..i&w=650&h=650&bih=688&biw=1280&q=semantic%20ui%20avatar%20images&ved=0ahUKEwit8PKSmfbhAhVyqHEKHRQKCR4QMwg3KAEwAQ&iact=mrc&uact=8",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fsemantic-ui.com%2Fimages%2Favatar%2Flarge%2Fjenny.jpg&imgrefurl=https%3A%2F%2Fsemantic-ui.com%2Fkitchen-sink.html&docid=URV2oOY9yvsKcM&tbnid=7EascN-0yV9X3M%3A&vet=10ahUKEwit8PKSmfbhAhVyqHEKHRQKCR4QMwg4KAIwAg..i&w=650&h=650&bih=688&biw=1280&q=semantic%20ui%20avatar%20images&ved=0ahUKEwit8PKSmfbhAhVyqHEKHRQKCR4QMwg4KAIwAg&iact=mrc&uact=8",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fsemantic-ui.com%2Fimages%2Favatar%2Flarge%2Fade.jpg&imgrefurl=https%3A%2F%2Fsemantic-ui.com%2Fkitchen-sink.html&docid=URV2oOY9yvsKcM&tbnid=7kFEEX1KvkVoXM%3A&vet=10ahUKEwit8PKSmfbhAhVyqHEKHRQKCR4QMwg5KAMwAw..i&w=650&h=650&bih=688&biw=1280&q=semantic%20ui%20avatar%20images&ved=0ahUKEwit8PKSmfbhAhVyqHEKHRQKCR4QMwg5KAMwAw&iact=mrc&uact=8",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fsemantic-ui.com%2Fimages%2Favatar%2Flarge%2Fchris.jpg&imgrefurl=https%3A%2F%2Fsemantic-ui.com%2Fkitchen-sink.html&docid=URV2oOY9yvsKcM&tbnid=t9AiRcOcLrF5uM%3A&vet=10ahUKEwit8PKSmfbhAhVyqHEKHRQKCR4QMwg8KAYwBg..i&w=650&h=650&bih=688&biw=1280&q=semantic%20ui%20avatar%20images&ved=0ahUKEwit8PKSmfbhAhVyqHEKHRQKCR4QMwg8KAYwBg&iact=mrc&uact=8",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fsemantic-ui.com%2Fimages%2Favatar2%2Flarge%2Fmark.png&imgrefurl=https%3A%2F%2Fcodepen.io%2Fdapoz%2Fpen%2FobdXWj.html&docid=CTRUPLpclo9w2M&tbnid=OBIfbOzreJKyBM%3A&vet=10ahUKEwit8PKSmfbhAhVyqHEKHRQKCR4QMwhBKAswCw..i&w=800&h=800&bih=688&biw=1280&q=semantic%20ui%20avatar%20images&ved=0ahUKEwit8PKSmfbhAhVyqHEKHRQKCR4QMwhBKAswCw&iact=mrc&uact=8",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fsemantic-ui.com%2Fimages%2Favatar%2Flarge%2Fchristian.jpg&imgrefurl=https%3A%2F%2Fsemantic-ui.com%2Fkitchen-sink.html&docid=URV2oOY9yvsKcM&tbnid=KQsQg3iPMIpwjM%3A&vet=10ahUKEwit8PKSmfbhAhVyqHEKHRQKCR4QMwhCKAwwDA..i&w=650&h=650&bih=688&biw=1280&q=semantic%20ui%20avatar%20images&ved=0ahUKEwit8PKSmfbhAhVyqHEKHRQKCR4QMwhCKAwwDA&iact=mrc&uact=8",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Freact.semantic-ui.com%2Fimages%2Favatar%2Flarge%2Fmolly.png&imgrefurl=https%3A%2F%2Freact.semantic-ui.com%2Felements%2Ficon%2F&docid=hwbiN6Dfhv9CEM&tbnid=cdsdIlnajpe6tM%3A&vet=10ahUKEwit8PKSmfbhAhVyqHEKHRQKCR4QMwhZKBYwFg..i&w=800&h=800&bih=688&biw=1280&q=semantic%20ui%20avatar%20images&ved=0ahUKEwit8PKSmfbhAhVyqHEKHRQKCR4QMwhZKBYwFg&iact=mrc&uact=8",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.small-improvements.com%2Fimages%2Fcharacters%2Fmary.svg&imgrefurl=https%3A%2F%2Fwww.small-improvements.com%2Fstyleguide%2Fcomponents&docid=QJVgef7jAR_eEM&tbnid=RZNZaGWZCddxtM%3A&vet=10ahUKEwit8PKSmfbhAhVyqHEKHRQKCR4QMwhJKBMwEw..i&w=800&h=800&bih=688&biw=1280&q=semantic%20ui%20avatar%20images&ved=0ahUKEwit8PKSmfbhAhVyqHEKHRQKCR4QMwhJKBMwEw&iact=mrc&uact=8",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fsemantic-ui.com%2Fimages%2Favatar%2Flarge%2Fdaniel.jpg&imgrefurl=https%3A%2F%2Fsemantic-ui.com%2Fkitchen-sink.html&docid=URV2oOY9yvsKcM&tbnid=eEoMciNERfYTiM%3A&vet=10ahUKEwit8PKSmfbhAhVyqHEKHRQKCR4QMwhFKA8wDw..i&w=650&h=650&bih=688&biw=1280&q=semantic%20ui%20avatar%20images&ved=0ahUKEwit8PKSmfbhAhVyqHEKHRQKCR4QMwhFKA8wDw&iact=mrc&uact=8",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F3a%2Fc2%2F67%2F3ac267b2778ccaaf0425ef1b0c4aade6.png&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F185492078379443620%2F&docid=Ntr2BDlj4YwZMM&tbnid=gcV8WnFW-v93NM%3A&vet=10ahUKEwit8PKSmfbhAhVyqHEKHRQKCR4QMwg7KAUwBQ..i&w=800&h=800&bih=688&biw=1280&q=semantic%20ui%20avatar%20images&ved=0ahUKEwit8PKSmfbhAhVyqHEKHRQKCR4QMwg7KAUwBQ&iact=mrc&uact=8"
]

const HeaderExampleImage = (props) => (
  <Header as='h2' className="FansBox">
    <Image className="avatar" circular src={urls[Math.floor(Math.random() * urls.length)]} /> {props.userName}
  </Header>
)

export default HeaderExampleImage
