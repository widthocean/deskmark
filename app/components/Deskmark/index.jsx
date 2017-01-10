import './style.scss';
import React, {PropTypes} from 'react';
import List from '../List';
import CreateBar from '../CreateBar';
import ItemEditor from '../ItemEditor';
import ItemShowLayer from '../ItemShowLayer';
import uuid from 'uuid';


const propTypes = {
    item: PropTypes.object
};

class Deskmark extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            selectedId: null,
            editing: false
        };
        this.saveItem = this.saveItem.bind(this);
        this.selectItem = this.selectItem.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
        this.createItem = this.createItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.editItem=this.editItem.bind(this);
    }

    saveItem(item) {
        let items = this.state.items;
        if(!item.id) {
            items = [...items, {
                title:item.title,
                content:item.content,
                id: uuid.v4(),
                time: new Date().getTime()
            }];
        }else{
            let olditem=this.state.items.find(r => r.id == item.id);
            olditem.title=item.title;
            olditem.content=item.content;
        }
        this.setState({
            items,
            selectedId: item.Id,
            editing: false
        });
    }

    selectItem(id) {
        if(id == this.state.selectedId) {
            return;
        }
        this.setState({
            selectedId: id,
            editing: false
        });
    }

    createItem() {
        this.setState({
            selectedId: null,
            editing: true
        });
    }

    cancelEdit() {
        this.setState({selectedId:null,editing: false});
    }

    deleteItem(id){
        if (!id) {
            return;
        }
        this.setState({
            items: this.state.items.filter(
                result => result.id !== id
            ),
        });
    }

    editItem(id){
        if (!id) {
            return;
        }
        this.setState({
            selectedId: id,
            editing: true
        });
    }
    render() {
        const {items, selectedId, editing}=this.state;
        const selected = selectedId && items.find(item => item.id == selectedId);
        const mainPart = editing ? <ItemEditor item={selected} onSave={this.saveItem} onCancel={this.cancelEdit}/>
            : <ItemShowLayer item={selected} onDelete={this.deleteItem} onEdit={this.editItem}/>;
        return (
            <section className="deskmark-component">
                <div className="container">
                    <div className="row">
                        <CreateBar onClick={this.createItem}/>
                        <List items={this.state.items} onSelect={this.selectItem}/>
                        {mainPart}
                    </div>
                </div>
            </section>
        );
    }
}
Deskmark.propTypes = propTypes;
export default Deskmark;

{/*const items=[*/
}
{/*{*/
}
{/*"id":"6c84fb90-12c4-11e1-840d-7b25c5ee775a",*/
}
{/*"title":"Hello1",*/
}
//         "content":"a1111",
//         "time":"2016-12-30"
//     },{
//         "id":"6c84fb90-12c4-11e1-840d-7b25c5ee775b",
//         "title":"Hello2",
//         "content":"a2222",
//         "time":"2017-01-01"
//     }
// ]
// const currentItem=items[0]; {/*const items=[*/}
{/*{*/
}
{/*"id":"6c84fb90-12c4-11e1-840d-7b25c5ee775a",*/
}
{/*"title":"Hello1",*/
}
//         "content":"a1111",
//         "time":"2016-12-30"
//     },{
//         "id":"6c84fb90-12c4-11e1-840d-7b25c5ee775b",
//         "title":"Hello2",
//         "content":"a2222",
//         "time":"2017-01-01"
//     }
// ]
// const currentItem=items[0];