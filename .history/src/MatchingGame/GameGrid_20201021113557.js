import React from 'react'
import GridRow from './GridRow'

class GameGrid extends React.Component{

    state ={
       valueArray: [],
    }

    componentDidMount(){
        const {rowCount, columnCount} = this.props
        const num = (rowCount * columnCount) / 2
        const valueArray = []

        for( let i = 0; i < num; i++ ){
          let randomNum = Math.floor((Math.random() * 100) + 1)
          while (valueArray.includes(randomNum)) {
            randomNum = Math.floor((Math.random() * 100) + 1)
          }
          valueArray.push(randomNum)
          valueArray.push(randomNum)
        }
        valueArray.sort(function(a, b){return 0.5 - Math.random()});

        this.setState({valueArray})
    }

    render(){
        const {rowCount, columnCount} = this.props
        const {valueArray} = this.state

        if ( valueArray.length === 0)
        const gridRows = []
        for( var i = 0; i < rowCount; i++ ){
            const startIndex = i * columnCount
            const endIndex = startIndex + columnCount
            gridRows.push(<GridRow columnCount={columnCount} values={valueArray.slice(startIndex,endIndex)} />)
        }
        return gridRows
    }
}

export default GameGrid