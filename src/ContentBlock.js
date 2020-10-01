import React from 'react'

function renderTopicText (props)
{
    return (
        <div className="text">{props.content}</div>
        )
}
function renderTopicArt(props)
{
    return (<div className="art"><img src={props.icon} alt={props.alt} /></div>)
}
function RenderTopic(props)
{
    return (
    <div className="topic">
        {renderTopicText(props.topic)}
        {renderTopicArt(props.topic)}
    </div> );
}
function RenderCard(props)
{
    return (
    <div className="card">
        {renderTopicText(props.topic)}
        {renderTopicArt(props.topic)}
    </div> );
}
function RenderBlockHeader(props)
{
    console.log(props.title)
return (
    <div className="header">
        <div className="title">{props.title}</div>
        <div className="art"><img src={props.icon} alt={props.alt} /></div>
    </div>
)
}
function RenderArticle(props)
{
    console.log(props.contents)
return (
<div className="article">
{

        props.map(newTopic => {
            return (
                        <RenderTopic key={newTopic.id} topic ={newTopic} />
            )
            })
}
</div>);
}

function RenderDeck(props)
{
    return (
        <div className="deck">
            {
                    props.map(newTopic => {
                        return (
                                    <RenderCard key={newTopic.id} topic ={newTopic} />
                        )
                        })
            }
        </div>);
}

function RenderVisualRow(props)
{
    return (
    <div className="inforow">
        <div className="title">
            {props.topic.title}
        </div>
        {renderTopicArt(props.topic)}
        {renderTopicText(props.topic)}
    </div> );
}

function RenderVisuals(props) {
    return (
        <div className="visuals">
            {
                    props.map(newTopic => {
                        return (
                                    <RenderVisualRow key={newTopic.id} topic ={newTopic} />
                        )
                        })
            }
        </div>);

}

function RenderList(props) {
    console.log("renderList", props)
    return (
        <div className="list">
            {
                    props.list.content.map((newPoint,index) => {
                        return (
                                    <li key={index}> {newPoint} </li>
                        )
                        })
            }
        </div>);

}

function RenderVLists(props) {
    return (
        <div className="vListing">
            {
                    props.map(newList => {
                        return (
                                    <RenderList key={newList.id} list ={newList} />
                        )
                        })
            }
        </div>);
}

class ContentBlock extends React.Component {

    constructor(props)
    {
        super(props);
        console.log('Running Home Constructor\n')

        this.state =
        {
            id:props.block.id,
            title:props.block.title,
            contents:props.block.contents,
            icon:props.block.icon,
            alt:props.block.alt,
            class:props.block.class,
        };
        this.RenderGenericBlock = this.RenderGenericBlock.bind(this)
        this.RenderDeckBlock = this.RenderDeckBlock.bind(this)
        this.RenderVisualBlock = this.RenderVisualBlock.bind(this)
        this.renderClientsBlock = this.renderClientsBlock.bind(this)
        this.renderVListsBlock = this.renderVListsBlock.bind(this)
    }


    RenderGenericBlock(props)
    {
        // let retval = <this.RenderBlockHeader /> + <this.RenderArticle />
            return (
                <div className="block">
                    <div className="generic">
                    {RenderBlockHeader(this.state)}
                    {RenderArticle(this.state.contents)}
                    </div>
                </div>);


    }

    RenderDeckBlock(props)
    {
            return (
                <div className="block">
                    <div className="cards">
                        {RenderBlockHeader(this.state)}
                        {RenderDeck(this.state.contents)}
                    </div>
                </div>);
    }

    RenderVisualBlock(props)
    {
        return (
            <div className="block">
                <div className="visual">
                    {RenderBlockHeader(this.state)}
                    {RenderVisuals(this.state.contents)}
                </div>
            </div>);
    }

    renderClientsBlock(props)
    {
        return (
            <div className="block">
                <div className="generic">
                    {RenderBlockHeader(this.state)}
                    {RenderDeck(this.state.contents)}
                </div>
            </div>
        )
    }

    renderVListsBlock(props)
    {
        return (
            <div className="block">
                    {RenderVLists(this.state.contents)}

            </div>
        )
    }


    render()
    {
        console.log('rendering block')
        switch(this.state.class)
        {
            case 'generic':
                return ( <this.RenderGenericBlock /> )
            case 'deck':
                return ( <this.RenderDeckBlock />)
            case 'visual':
                return ( <this.RenderVisualBlock />)
            case 'clients':
                return ( <this.renderClientsBlock />)
            case 'VerticalLists':
                return ( <this.renderVListsBlock />)
            default:
                return('error')
        }
    }

} export default ContentBlock