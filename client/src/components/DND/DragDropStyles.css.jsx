export default {
// This takes in the deskType passed from Container and checks style. Grabs css for that style
    switchStyle: (deskType, backgroundColor) => {

        const shape = {
            border: '1px solid gray',
            width: '80px',
            height: '60px',
            cursor: 'move',
        }

        const shape2 = {
            border: '1px solid gray',
            width: '120px',
            height: '60px',
            cursor: 'move',
        }
        const shape3 = {
            border: '1px solid gray',
            width: '60px',
            height: '80px',
            cursor: 'move',
        }

        const shape4 = {
            border: '1px solid gray',
            width: '60px',
            height: '120px',
            cursor: 'move',
        }

        const shape5 = {
            border: '1px solid gray',
            width: '60px',
            height: '60px',
            cursor: 'move',
        }

        const shape6 = {
            border: '1px solid gray',
            width: '58px',
            height: '58px',
            cursor: 'move',
            WebkitTransform: 'rotate(-45deg)',
        }
        const shape7 = {
            border: '1px solid gray',
            width: '60px',
            height: '60px',
            cursor: 'move',
            borderRadius: "50%",
        }
        const shape8 = {
            border: '1px solid gray',
            width: '100px',
            height: '100px',
            cursor: 'move',
            borderRadius: "50%",
        }

        const shape9 = {
            border: '1px solid gray',
            width: '120px',
            height: '120px',
            cursor: 'move',
            borderRadius: "50%",
        }
        switch (deskType) {
            case 'desk-horizontal':
                return Object.assign({}, shape, {backgroundColor});
            case 'desk-long-horizontal':
                return Object.assign({}, shape, {backgroundColor});
            case 'desk-vertical':
                return Object.assign({}, shape, {backgroundColor});
            case 'desk-long-vertical':
                return Object.assign({}, shape, {backgroundColor});
            case 'desk-square':
                return Object.assign({}, shape, {backgroundColor});
            case 'desk-square-45':
                return Object.assign({}, shape, {backgroundColor});
            case 'desk-circle':
                return Object.assign({}, shape, {backgroundColor});
            case 'desk-medium-circle':
                return Object.assign({}, shape, {backgroundColor});
            case 'desk-large-circle':
                return Object.assign({}, shape, {backgroundColor});
            default:
                return Object.assign({}, shape, {backgroundColor});
        }
    },

    getStyles: (left, top, isDragging) => {
        let transform = `translate3d(${left}px, ${top}px, 0)`
        return {
            position: 'absolute',
            transform,
            WebkitTransform: transform,
            opacity: isDragging ? 0 : 1,
            height: isDragging ? 0 : '',
        }
    },

}