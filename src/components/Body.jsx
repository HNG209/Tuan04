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
            <div className="flex flex-col items-center">
                <div className="w-4/5">
                    <div className="text-3xl font-bold my-4">Emma Gonzalez's Recipe Box</div>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}>
                        <img src={person} alt="" />
                        <div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod delectus tempora commodi unde porro ex cumque corrupti pariatur. Modi vel reiciendis quos vitae dignissimos officia facere unde quis! Ut ducimus, culpa quos dignissimos similique iste eligendi molestias minus qui odio cumque rerum nostrum laboriosam. Doloremque quos ratione voluptate provident autem?</p>
                            <div display="flex" style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                                <div className="font-bold">6.5k Subcribers</div>
                                <button className="bg-pink-100 text-pink-400 hover:bg-pink-200 hover:text-pink-500 cursor-pointer px-4 py-2 my-2 rounded-md">Share</button>
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