import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';


/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {
  static defaultProps ={
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.25
  };
  constructor(props) {
    super(props);

    // TODO: set initial state
    this.state = {hasWon: false, board: this.createBoard()};
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    let board = [];
    // TODO: create array-of-arrays of true/false values

    for(var i = 0; i < this.props.nrows; i++){
      let row = [];
      for(var j = 0; j < this.props.ncols; j++) {
          row.push(Math.random() < this.props.chanceLightStartsOn); //Math.random() < this.props.chanceLightStartsOn
        }
        board.push(row);
    }

    return board;
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    let {ncols, nrows} = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);


    function flipCell(y, x) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    flipCell(y,x);
    flipCell(y,x + 1);
    flipCell(y,x - 1);
    flipCell(y+1,x);
    flipCell(y-1,x);



    // TODO: flip this cell and the cells around it

    // win when every cell is turned off
    let hasWon = false;
    let count = 0;

    for(var i = 0; i < this.props.nrows; i++) {
      for(var j = 0; j < this.props.ncols; j++) {
        if(board[i][j] === false){
          count++;
          //console.log(count);
        }
      }
    }

    if(count === (this.props.nrows * this.props.ncols)) {
      hasWon = true;
    }

    //console.log(count);

    // TODO: determine is the game has been won

    

    this.setState({ board: board, hasWon:  hasWon});
  }

  renderBoard() {

    if(this.state.hasWon) {
      return (
        <div className="Board-title">
          <div className="winner">
            <span className="neon-orange">YOU</span>
            <span className="neon-blue">WIN!</span>
          </div>
        </div>
      )
    }

    let printBoard = [];
    for(var i = 0; i < this.props.nrows; i++) {
      let row = [];
      for(var j = 0; j < this.props.ncols; j++) {
        let coord = `${i}-${j}`;
        row.push(<Cell key={coord} isLit={this.state.board[i][j]} flipCellsAroundMe={() => this.flipCellsAround(coord)} />)
      } 
      printBoard.push(<tr key={i}>{row}</tr>);
    }
    return <div>
            <div className="Board-title">
              <div className="neon-orange">Lights</div>
              <div className="neon-blue">Out</div>
            </div>
              <table className="Board">
                <tbody>
                  {printBoard}
                </tbody>
              </table>
            </div>;
  }


  /** Render game board or winning message. */

  render() {
    return (
    // if the game is won, just show a winning msg & render nothing else

    // TODO

    // make table board
    <div>
      {this.renderBoard()}
    </div>

    // TODO
    );
  }
}


export default Board;
