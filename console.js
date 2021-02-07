window.onload = () => {
    // if (window.origin !==)

    // INJECT JS
    document.querySelector("div > .side-nav").remove();
    document.querySelector("div > .filetree").remove();
    document.querySelector("div > .file-header").remove();
    document.querySelector("div > .is-logged-in").remove();
    document.querySelector("div > .monaco-editor-plugin").remove();
    document.querySelector(`div[style='position: absolute; display: flex; justify-content: center; align-items: center; flex: 1 0 auto; overflow: hidden; border-radius: var(--border-radius-1); background: var(--color-background-3); cursor: row-resize; z-index: 1; left: calc(15% + 50.5px); top: calc(50% + 34px); width: calc(85% + -50.5px); height: calc(0% + 8px);']`).remove();
    document.querySelector(`div[style="position: absolute; display: flex; justify-content: center; align-items: center; flex: 1 0 auto; overflow: hidden; border-radius: var(--border-radius-1); background: var(--color-background-3); cursor: col-resize; z-index: 1; width: calc(0% + 8px); height: calc(100% + -68px);"]`).remove();
    // document.querySelector("div > .side-nav").remove();

}



