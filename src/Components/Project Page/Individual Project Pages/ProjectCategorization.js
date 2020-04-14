import React from "react";

class ProjectCategorization extends React.Component{
    render() {
        return(
            <div>
            <p>
                <b>type - </b>
                {this.props.category.type}
            </p>
            <p>
            <b>tools - </b>
    {this.props.category.tools}
    </p>

                <p>
                <b>timeline - </b>
                {this.props.category.timeline}
            </p>
                <p>
                    <b>status - </b>
                    {this.props.category.status}
                </p>
            </div>
        )
    }
}

export default ProjectCategorization