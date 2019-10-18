import React, {Component} from 'react';
import axios from 'axios'

import './ImageUpload.css';

class ImageUpload extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dragging: false
        }
    }

    dropRef = React.createRef()

    handleDrag = (e) => {
        e.preventDefault()
        e.stopPropagation()
    }
    handleDragIn = (e) => {
        e.preventDefault()
        e.stopPropagation()
        this.dragCounter++ 
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
            this.setState({dragging: true})
        }
    }
    handleDragOut = (e) => {
        e.preventDefault()
        e.stopPropagation()
        this.dragCounter-- 
        if (this.dragCounter > 0) 
            return
        this.setState({dragging: false})
    }
    handleDrop = (e) => {
        e.preventDefault()
        e.stopPropagation()
        this.setState({drag: false})
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            this
                .props
                .handleDrop(e.dataTransfer.files)
            e
                .dataTransfer
                .clearData()
            this.dragCounter = 0
        }
    }

    componentDidMount() {
        this.dragCounter = 0
        let div = this.dropRef.current
        div.addEventListener('dragenter', this.handleDragIn)
        div.addEventListener('dragleave', this.handleDragOut)
        div.addEventListener('dragover', this.handleDrag)
        div.addEventListener('drop', this.handleDrop)
    }
    componentWillUnmount() {
        let div = this.dropRef.current
        div.removeEventListener('dragenter', this.handleDragIn)
        div.removeEventListener('dragleave', this.handleDragOut)
        div.removeEventListener('dragover', this.handleDrag)
        div.removeEventListener('drop', this.handleDrop)
    }

    render() {
        return (
            <div class="uploadBox" ref={this.dropRef}>
                {this.state.dragging && <div class="uploadBoxOverlay">
                    <div class="uploadBoxOverlayTransparency">
                        <div>drop here :)</div>
                    </div>
                </div>
                }
                {this.props.children}
            </div>
        )
    }
}

// style_image + subject = react upload box
// force mouse pointer css cursor
// hook up

export default ImageUpload;
