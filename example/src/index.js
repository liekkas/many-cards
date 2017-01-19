import dva from 'dva';
import './index.html';
import './styles/index.less';
import CardConfig from '../../dist/CardConfig'

CardConfig.setOption({
//   colors: ['#343434','#123123']
})

// 1. Initialize
const app = dva();

app.model(require("./models/app"));
app.model(require("./models/home"));
app.model(require("./models/hearts/heart2"));
app.model(require("./models/spades/spade2"));

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
