
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLoading} from "../../hooks"

const listItem = ["Home", "danh mục 1", {"danh mục 2":["danh mục 2.1", "danh mục 2.2"]}]
console.log(listItem)
const Menu = () => {
    return (
        <div className="menu">
            <div className="container no-space">
                {listItem.map( (item) => {
                    if(typeof item === 'object'){
                        console.log(item)
                        for(let key in item){
                            return (
                                <li key={item}>
                                    <a href="">{key}</a>
                                </li>
                            )
                        }
                    }
                    else{
                        return (
                            <li key={item}>
                                <a href="" >{item}</a>
                            </li>
                        )
                    }
                })}
            </div>
        </div>
    )
}
export default Menu;