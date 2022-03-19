import './App.css';

function App() {

  let curDate = new Date(2022,5,5,14);
  curDate = curDate.getHours();
  let greetings= '';
  let cssStyle = { };

  if(curDate>=1 && curDate<12)
  {
    greetings='Good Morning';
    cssStyle.color = 'green';
  }
  else if(curDate>=12 && curDate<19)
  {
    greetings='Good AfterNoon';
    cssStyle.color = 'orange';
  }
  else
  {
    greetings='Good Night';
    cssStyle.color = 'grey';
  }

  return (
    <>
   <div>
   <h1>Hello, <span style={cssStyle}>{greetings}</span></h1>

   </div>
     
    </>
  
  );
}

export default App;
