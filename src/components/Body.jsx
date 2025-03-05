import { useEffect, useState } from "react"
import Card from "./Card"

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
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                {
                    datas.map((d) => (
                        <Card key={d.idMeal} value={d}></Card>
                    ))
                }
            </div>
        </>
    )
}