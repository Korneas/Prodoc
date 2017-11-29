import * as React from 'react';

export class ProjectPreview extends React.Component<any, any>{
    render() {
        var thumb = this.props.thumbnail;
        if (thumb == null) { thumb = 'https://komarketing.com/images/2014/08/linkedin-default.png' }

        return <div className="projectPreview" onClick={() => this.props.onClicking()}>
            <div className="thumbnail" style={{ background: 'url(' + thumb + ') center center / cover'}}></div>
            <div className="previewInfo">
                <h2>{this.props.title}</h2>
                <p>
                    {this.props.tags.map((x, index) => {
                        if (index != this.props.tags.length - 1) {
                            return `#${x} | `;
                        } else {
                            return `#${x}`;
                        }
                    })}
                </p>
            </div>
        </div>
    }
}