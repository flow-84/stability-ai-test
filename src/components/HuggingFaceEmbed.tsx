import { onCleanup, onMount } from 'solid-js';

const HuggingFaceEmbed = () => {
  onMount(() => {
    const script = document.createElement('script');
    script.src = "https://gradio.s3-us-west-2.amazonaws.com/3.20.0/gradio.js";
    script.type = "module";
    document.body.appendChild(script);

    const div = document.createElement('div');
    div.innerHTML = `<gradio-app src="https://stabilityai-stable-diffusion.hf.space"></gradio-app>`;
    document.body.appendChild(div);

    onCleanup(() => {
      document.body.removeChild(script);
      document.body.removeChild(div);
    });
  });

  return <div />;
};

export default HuggingFaceEmbed;
