import { onMount } from 'solid-js';

const EmbedSpace = () => {
  onMount(() => {
    const script = document.createElement('script') as HTMLScriptElement;
    script.src = "https://gradio.s3-us-west-2.amazonaws.com/3.20.0/gradio.js";
    script.type = "module";
    document.body.appendChild(script);

    const gradioApp = document.createElement('div');
    gradioApp.innerHTML = `<gradio-app src="https://stabilityai-stable-diffusion.hf.space"></gradio-app>`;
    document.body.appendChild(gradioApp);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(gradioApp);
    };
  });

  return null;
};

export default EmbedSpace;
