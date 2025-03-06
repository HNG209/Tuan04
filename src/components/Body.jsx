import { useEffect, useState } from "react"
import Card from "./Card"
import person from "../assets/person.png"

export default function Body() {
    const [datas, setDatas] = useState([])

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
            .then((res) => { return res.json() })
            .then((data) => {
                setDatas(data.meals)
            })
    }, [])
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ width: "80%" }}>
                    <h2>Emma Gonzalez's Recipe Box</h2>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}>
                        <img src={person} alt="" />
                        <div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod delectus tempora commodi unde porro ex cumque corrupti pariatur. Modi vel reiciendis quos vitae dignissimos officia facere unde quis! Ut ducimus, culpa quos dignissimos similique iste eligendi molestias minus qui odio cumque rerum nostrum laboriosam. Doloremque quos ratione voluptate provident autem?</p>
                            <div display="flex" style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                                <h3>6.5k Subcribers</h3>
                                <button style={{height: "50px", color: "deeppink"}}>Share</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                    {
                        datas.map((d) => (
                            <Card key={d.idMeal} value={d}></Card>
                        ))
                    }
                </div>
            </div>
        </>
    )
}