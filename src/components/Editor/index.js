import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
//import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default class TextEditor extends Component{
    constructor(props) {
      super(props);
      this.state = {
      
      };
    }

    render() {
      const wrapperStyle = {
          border: '1px solid #969696',
      }
      const editorStyle = {
          height:'10rem',
          padding:'1rem'
      }

   
        return (
          <React.Fragment>
                <Editor
                    wrapperStyle={wrapperStyle}
                    editorStyle={editorStyle}                                                                         
                />
          </React.Fragment>
        )
     }
  }