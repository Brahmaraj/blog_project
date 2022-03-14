import React, { createContext, useState } from "react";

export const BlogContext = createContext();

export const DataContext = (props) => {

    // const map_data = new Map();
    // map_data.set("tourism",[{
    //         name:"Kerala"
    //     },
    //     {
    //         name:"Sikkim"
    //     },
    //     {
    //         name:"Mumbai"
    //     }]);

    const dataObj = [{
        category:"tourism",
        data:[{
            id:1,
            name:"Kerala",
            info:"visit kerala"
        },
        {
            id:2,
            name:"Sikkim",
            info:"visit sikkim"
        },
        {
            id:3,
            name:"Mumbai",
            info:"visit mumbai"
        }]
    },
    {
        category:"fitness",
        data:[{
            id:4,
            name:"yoga",
            info:"you must do yoga"
        },
        {
            id:5,
            name:"areobics",
            info:"you must do aerobics"
        },
        {
            id:6,
            name:"exercise",
            info:"exercise is good for health"
        }]
    }
    ]

    const [data] = useState(dataObj);
    return (
        <>
        <BlogContext.Provider value = {data}>
            {props.children}
        </BlogContext.Provider>
        </>
    )
}