import dynamic from 'next/dynamic';

const Widget = dynamic(() => import('./widget'));

function WidgetContainer() {
  return <Widget />;
}

export default WidgetContainer;
