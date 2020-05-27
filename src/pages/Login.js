import React, {Component as RC} from 'react';
import Page from '../components/Page';
import Banner from '../components/Banner';

export default class Login extends RC {
    constructor(props)
    {
        super(props);
        this.state = {
            banner: ''
        };
    }
    componentDidMount()
    {
        this.setState({
            banner: <Banner
                        image='https://background-tiles.com/overview/red/patterns/large/1056.png'
                        title="This tool will help you:"
                        content={
                        <ul>
                            <li>Keep track of your Dungeons &amp; Dragons characters</li>
                            <li>Make friends with other players.</li>
                        </ul>
                        }
                    />
        });
    }
    render()
    {
        return(
            <Page banner={this.state.banner}>
                <h3>Sign Up to Get Started!</h3>
                <form>
                    <label>Username</label>
                    <input type="text" name="username" />
                    <label>Password</label>
                    <input type="password" name="password" />
                </form>
                <p>
                    <button onClick={this.props.login}>Login</button>

                Perhaps the most diverse class of characters in the worlds of Dungeons &amp; Dragons: Questing knights, conquering overlords, royal champions, elite foot soldiers, hardened mercenaries, and bandit kings—as fighters, they all share an unparalleled mastery with weapons and armor, and a thorough knowledge of the skills of combat.
                </p>

<p>
Not every member of the city watch, the village militia, or the queen’s army is a fighter. Most of these troops are relatively untrained soldiers with only the most basic combat knowledge. Veteran soldiers, military officers, trained bodyguards, dedicated knights, and similar figures are fighters. Some fighters feel drawn to use their training as adventurers. The dungeon delving, monster slaying, and other dangerous work common among adventurers is second nature for a fighter, not all that different from the life he or she left behind. There are greater risks, perhaps, but also much greater rewards—few fighters in the city watch have the opportunity to discover a magic flame tongue sword, for example.
</p>
<p>
Fighters learn the basics of all combat styles. Every fighter can swing an axe, fence with a rapier, wield a longsword or a greatsword, use a bow, and even trap foes in a net with some degree of skill. Likewise, a fighter is adept with shields and every form of armor. Beyond that basic degree of familiarity, every fighter specializes in certain styles of combat. Some concentrate on archery, some on fighting with two weapons at once, and some on augmenting their martial skills with magic. This combination of broad general ability and extensive specialization makes fighters superior combatants on battlefields and in dungeons alike

                </p>
                <p>

Perhaps the most diverse class of characters in the worlds of Dungeons &amp; Dragons: Questing knights, conquering overlords, royal champions, elite foot soldiers, hardened mercenaries, and bandit kings—as fighters, they all share an unparalleled mastery with weapons and armor, and a thorough knowledge of the skills of combat.
</p>

<p>
Not every member of the city watch, the village militia, or the queen’s army is a fighter. Most of these troops are relatively untrained soldiers with only the most basic combat knowledge. Veteran soldiers, military officers, trained bodyguards, dedicated knights, and similar figures are fighters. Some fighters feel drawn to use their training as adventurers. The dungeon delving, monster slaying, and other dangerous work common among adventurers is second nature for a fighter, not all that different from the life he or she left behind. There are greater risks, perhaps, but also much greater rewards—few fighters in the city watch have the opportunity to discover a magic flame tongue sword, for example.
</p>
<p>
Fighters learn the basics of all combat styles. Every fighter can swing an axe, fence with a rapier, wield a longsword or a greatsword, use a bow, and even trap foes in a net with some degree of skill. Likewise, a fighter is adept with shields and every form of armor. Beyond that basic degree of familiarity, every fighter specializes in certain styles of combat. Some concentrate on archery, some on fighting with two weapons at once, and some on augmenting their martial skills with magic. This combination of broad general ability and extensive specialization makes fighters superior combatants on battlefields and in dungeons alike

</p>
            </Page>
        )
    }
}