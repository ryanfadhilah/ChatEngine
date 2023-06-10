// https://socket.dev/npm/package/react-chat-engine-pretty
import { PrettyChatWindow } from 'react-chat-engine-pretty'
const ChatsPage = (props) => {
    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                projectId="2e079b89-37bb-4f1c-b307-f64b0dbca1c2"
                username={props.user.username}
                secret={props.user.secret}
            />
        </div>
    );
}

export default ChatsPage