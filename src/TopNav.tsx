
import colorIcon from "./assets/palette.svg"
import fontIcon from "./assets/font.svg"
import weightIcon from "./assets/weight.svg"
import plusIcon from "./assets/plus.svg"

import forkIcon from "./assets/fork.svg"
import TopNavButton from "./TopNavButton"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import { Stack } from "react-bootstrap"
import type { Slide } from "./types"
import FontForm from "./FontForms"
//function that takes in nothing and returns void, nothing.
type ToolbarProps = {
    addBlankSlide: () => void
    updateSlide: (property: string, color: string, id?: number ) => void
    selectedSlide?: Slide
}
//receiving 'Blank slide" prop from Top nav
export default function TopNav({ 
    addBlankSlide, 
    updateSlide,
    selectedSlide
 }: ToolbarProps) {

    // functions for top nav buttons, open and close
    const [isColorModalOpen, setIsColorModalOpen] = useState(false)
    const [isFontModalOpen, setIsFontModalOpen] = useState(false)

    const handleColorClose = () => setIsColorModalOpen(false)
    const handleFontClose = () => setIsFontModalOpen(false)

// Modal with buttons to change font color of slide, with close function
    return (
        <div className=" d-flex justify-content-between bd-highlight mb-3">
            <h5>Add more ingredients</h5>
            <div>
                <TopNavButton icon={colorIcon} buttonText={" Color "} onClick={() => setIsColorModalOpen(true)} />
                <TopNavButton icon={fontIcon} buttonText={" Font"} onClick={() => setIsFontModalOpen(true)} />
                <TopNavButton icon={weightIcon} buttonText={" Weight"} onClick={() => alert("Send me to c")} />
                <TopNavButton icon={plusIcon} buttonText={" Add Cabbage"} onClick={addBlankSlide} />
            </div>
            <Modal show={isColorModalOpen} onHide={handleColorClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Change font color</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Stack direction="horizontal" gap={2}>
                        <Button
                            variant={selectedSlide?.fontColor === "gold" ? "warning" : "outline-warning"}
                            onClick={() => updateSlide ("fontColor", "gold", selectedSlide?.id )}
                        >Gold</Button>
                        <Button
                            variant={selectedSlide?.fontColor === "green" ? "success" : "outline-success"}
                            onClick={() => updateSlide ("fontColor", "green",selectedSlide?.id )}
                        >Green</Button>
                        <Button
                            variant={selectedSlide?.fontColor === "gray" ? "secondary" : "outline-secondary"}
                            onClick={() => updateSlide ("fontColor", "gray", selectedSlide?.id, )}
                        >gray</Button>
                    </Stack>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleColorClose}>
                        Close this
                    </Button>   
                </Modal.Footer>
            </Modal>


            {/* Modal for font style */}
            <Modal show={isFontModalOpen} onHide={handleFontClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Change font Style</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <FontForm 
                updateSlide={updateSlide} 
                selectedSlide={selectedSlide}
                handleClose={handleFontClose}
                />

                <h6>Something here</h6>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleFontClose}>
                        Close this
                    </Button>
                </Modal.Footer>

                </Modal.Body>
            </Modal>
       

        </div>
    )

}