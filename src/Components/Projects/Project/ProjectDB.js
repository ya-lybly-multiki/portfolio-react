import socialImg from '../../../assets/img/Projects/38967820-social-network-social-media-business-people-technology-concept.webp'
import todoListImg from '../../../assets/img/Projects/logo-og.png'


export const ProjectDB = [
    {title:"Social network",
        description: {
            Techs : ["TS", "React","Redux and Thunk","Axios"],
        },

    refs:{project:"",code:"https://github.com/ya-lybly-multiki/social-network"},
        style: {backgroundImage: `url(${socialImg})`},
    },
    {title:"Todolist",
        description: {
            Techs : ["TS", "React","Redux and Thunk","Unit Test", "Storybook","Material UI","Axios"],
        },
        refs:{project:"",code:"https://github.com/ya-lybly-multiki/todolist"},
        style: {backgroundImage: `url(${todoListImg})`},
    },
]