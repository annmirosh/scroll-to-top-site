import '../../stencil.core';
export declare class ScrollToTopBtn {
    visible: boolean;
    /** Property that defines mode of the button (can be "light" or "dark")
     * */
    mode: string;
    /** Property that defines the right position of the button (in px)
     * */
    right: number;
    /** Property that defines the bottom position of the button (in px)
     * */
    bottom: number;
    /** Property that defines the direction of the scroll (for now only the "top" direction is available)
     * */
    direction: string;
    constructor();
    componentWillLoad(): void;
    componentWillUnload(): void;
    private manageVisibility;
    private scroll;
    render(): JSX.Element;
}
