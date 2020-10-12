import React from 'react';
import ContentBlock from './ContentBlock.js'


class Page extends React.Component {
    constructor(props)
    {
        super(props);


        console.log('Running Home Constructor\n')
        console.log(props)

        this.state =
        {
            name:props.name,
            sections:props.sections
        };
    }

    render(props)
    {
        console.log('Rendering Home Class\n')
        console.log(this.state)
        return (
        <div className={this.state.name}>
            {
                this.state.sections.map(newBlock => {
                    return(
                        <ContentBlock key={newBlock.id} block={newBlock} />
                    )
                    })
            }
        </div>);
    }
} export default Page;
