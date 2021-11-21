import {Card} from "../components/Cards/Card.component";
import { Container } from "../components/Container/Container.component";
import {Leaf} from "../components/Leaf/Leaf.component";

export function Cards() {
    return (
        <Container>
            <Leaf />
            <div className="flex-container">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </Container>
    );
}