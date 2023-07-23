# my-oc-react-modal-component
This is a react modale component for an OpenClassrooms project.

## How to use

### Install the package
```sh
npm i my-oc-react-modal-component
```

### Example

    import { Modale } from 'my-oc-react-modal-component';

    function MyComponent() {

      const [isActive, setIsActive] = useState(false);

      function closeModale() {
        setIsActive(false);
      }
      return (

        <Modale 
          enableClose={ true }
          title="Title content"
          content="Text content"
          onClose={ closeModale }
          isActive={ isActive }
        />
      )
    }

### Props

| Prop | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `isActive` | `boolean` | Activate/Deactivate the modale |
| `onClose` | `function` | Toggle the modale |
| `enableClose` | `boolean` | Showing a close buttonn |
| `title` | `string` | Modale title |
| `content` | `string` | Modale content |

## License
MIT
