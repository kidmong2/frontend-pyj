import React, { useCallback, useReducer, useRef, useState } from 'react'
import { start } from 'repl';


export default function WebcamDrawingApp() {

  const videoRef = useRef<HTMLVideoElement>(null);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [isDrawing, setIsDrawing] = useState<boolean>(false);

  const [brushColor, setBrushColor] = useState<string>('#000');

  const [brushSize, setBrushSize] = useState<number>(5);

  const [brushShape, setBrushShape] = useState<CanvasLineCap>('round');

  const [drawingMode, setDrawingMode] = useState<boolean>(true);

  //! 그리기 시작 호출 함수
  const startDrawing = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const {offsetX, offsetY} = e.nativeEvent;

    const context = canvasRef.current?.getContext('2d');

    if(context) {
      context.beginPath();
      context.moveTo(offsetX, offsetY);
      setIsDrawing(true);
    }
  }, []);

  //! 마우스를 움직일 때
  const draw = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;

    const {offsetX, offsetY} = e.nativeEvent;

    const context = canvasRef.current?.getContext('2d');

    if(context) {
      context.lineTo(offsetX, offsetY);
      context.strokeStyle = drawingMode ? brushColor : '#FFF'
      context.lineWidth = brushSize;
      context.lineCap = brushShape;

      context.stroke();
    }

  }, [isDrawing, brushColor, brushSize, brushShape, drawingMode]);

  //! 그리기를 멈출 때
  const stopDrawing = useCallback(() => {
    const context = canvasRef.current?.getContext('2d');

    if(context) {
      context.closePath();
    }

    setIsDrawing(false);
  }, []);

  //! 그림 저장
  const saveDrawing = useCallback(() => {
    if(canvasRef.current) {
      const image = canvasRef.current.toDataURL('images/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = 'Drawing.png';
      document.body.appendChild(link);
      link.click();
      document.removeChild(link);
    }
  }, []);


  return (
    <div>
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        width={850}
        height={600}
        style={{border: '1px solid black'}}
      />
      <div>
        <input type="color" value={brushColor} onChange={(e) => setBrushColor(e.target.value)}/>

        <input type="range" min={1} max={10}value={brushSize} onChange={(e) => setBrushSize(parseInt(e.target.value))}/>

        <select 
          value={brushShape}
          onChange={(e) => setBrushShape(e.target.value as CanvasLineCap)}
        >
          <option value="round">Round</option>
          <option value="square">Square</option>
        </select>
          <button
            onClick={(e) => setDrawingMode(!drawingMode)}
          >
            {drawingMode ? 'Erase' : 'Draw'}
          </button>

          <button onClick={saveDrawing}>Save Drawing</button>
      </div>
    </div>
  )
}