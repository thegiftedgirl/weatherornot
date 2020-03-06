
import React from 'react';






const popover =(
    <Popover id="popover-basic">
        <Popover.Title as="h3">popover Right</Popover.Title>
        <Popover.Content>
            boyah girla
        </Popover.Content>
        </Popover>
)
const StyleButton = () => (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
        <Button variant="success">CLick me</Button>
    </OverlayTrigger>
);
render(<Example />)

export default StyleButton;
