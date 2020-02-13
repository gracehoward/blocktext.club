---
date: "2020-02-12"
title: "Social Servers"
description: "In the year of our Lord two thousand and twenty, it is well-established that people don't necessarily love all of the time they spend on social media."
tags: ["The discreet charm of quiet spaces, or how we can foster more intentional communities online."]
published: true
---

The research<sup>[[1]](https://www.aaai.org/ocs/index.php/ICWSM/ICWSM13/paper/view/6124/6351)[[2]](https://datasociety.net/research/media-manipulation/)[[3]](https://www.theguardian.com/news/series/cambridge-analytica-files)[[4]](https://foundation.mozilla.org/en/internet-health-report/)[[5]](https://www.nytimes.com/interactive/2019/11/14/magazine/internet-future-dream.html)</sup> is mounting: social media use is seemingly linked to a host of mental health issues, reduced sleep quality, and low self-esteem; our data is being harvested and used against us, skewing the outcomes of entire national elections; voices of dissent and disinformation have become amplified and abundant. 
Even at the anecdotal level, it's incredibly common to hear people going on "social media breaks" every so often, taking temporary hiatuses from their online accounts and deleting apps off their phones.
Others find themselves unwillingly, compulsorily bound to certain platforms that are used to stay up to date with organizations or social circles.
Being disconnected from the rest of the world further makes it difficult for many to keep up with the rapid pace of cultural production, which is exchanged as a dominant mode of social currency even offline.

It comes across as a bit out-of-touch, then, to suggest that people simply go off the grid, and even as someone who limits their social media presence, it would be a mistake to understate the value of the Internet as a tool for socializing, community building, and connection.
So, are we to just accept the fact that social media, for all its ills, is a necessary evil?

![](https://d2w9rnfcy7mm78.cloudfront.net/6126139/original_6fedbdf89e1858395482abf1edc62c40.gif?1581284195?bc=0)

I've come to believe that we can— and should— forge communities in different parts of the connected web, away from the cacophony of corporate ownership.
People deserve places of safety and refuge from the noise of engagement metrics and targeted ads and terrible YouTube comments, at least sometimes.
It isn't necessarily that hours spent online is the problem (although it probably never hurts to step away).
I would argue that it's *how* we spend our hours online that makes the biggest difference, and it isn't far-fetched to assert that interfaces designed to farm users' attention and exploit users' data for profit, that are algorithmically structured to engender and amplify discordance, may not be so great.

Finding, building, and nurturing quieter, more thoughtful places on the Internet, where user interaction is more intentional and more empathetic, is one way we can work towards cultivating a healthier relationship with technology.
Rather than imbue feelings of anxiety and uncertainty, the places that we spend our time should do the opposite.

In the past year or so, I've spent a lot of time exploring these ideas, and looking for places like this that already exist.
This has included [tilde](http://tilde.club/) [servers](http://tilde.town/)<sup>[[6]](https://medium.com/message/tilde-club-i-had-a-couple-drinks-and-woke-up-with-1-000-nerds-a8904f0a2ebf)</sup>, public Unix and Unix-like (*nix) systems meant for sharing computer space toward the goal of collaborative, compassionate community building; and [Mastodon](https://joinmastodon.org/), an open-source, decentralized social network based on the model of federated servers.
There are other exemplars of online spaces that foster meaningful engagement ([Are.na](https://are.na) jumps to mind), but for the sake of brevity, I'll focus on the former two, which share similar underlying frameworks.

<br />

# Mastodon Instances and Tilde Servers

I keep finding myself returning to Darius Kazemi's instructional guide on running a small-scale social network site, based on his own experience operating a Mastodon instance called "Friend Camp."<sup>[[7]](https://runyourown.social/)</sup>
He highlights the benefits of maintaining one's own Mastodon server, of having a small community over a larger one, and the control that the community holds over all aspects of their communal space, including "hyper-specific norms," software modifications, social rules and code of conduct policies, and user data.
This level of ownership is, of course, impossible when using the closed-source systems of corporate social media platforms (Twitter is the recurring point of comparison, as Mastodon is similarly structured for microblogging, but there are also options for Instagram- and YouTube-like experiences).

Likewise, tilde servers utilize *nix operating systems, and offer many of the same benefits that Mastodon does, as both are fundamentally grounded in principles of free and open-source software.<sup>[[8]](https://www.gnu.org/philosophy/free-sw.en.html)</sup>
Both also have some basis in ideas of direct communication and server-based communities, with Mastodon instances belonging to a larger, federated universe (the appropriately titled "[fediverse](https://en.wikipedia.org/wiki/Fediverse)").
All users of a certain community live on a single server, which can then communicate with communities that live on other servers, and each server has complete autonomy over which servers they would like in their neighborhoods.
Tilde servers are part of the larger "[tildeverse](https://tildeverse.org/)," a loose network that consists of many member nodes, each of which is a tilde server that houses its own community.
The tildeverse is thus a network of communicating servers, which use an IRC network for real-time chatting.

In terms of format, however, tilde servers differ foundationally from Mastodon instances.
Tilde servers are purely text-based environments, with participating users logging in via ssh, calling to mind elements of an older web, where netizens express themselves through (oftentimes clunky) handmade webpages, rather than profiles; participate in BBS-style forums; and make heavy use of designated IRC chat rooms.

![](https://d2w9rnfcy7mm78.cloudfront.net/6160204/large_5bfebdcc0e1ce72868f70fbdff113077.png?1581547916?bc=0)

<br />

# Roadblocks Ahead

Unfortunately, it's incredibly difficult to fully replace the presiding players in social media.
There are many barriers that lie in the way of a truly revolutionary migration to Mastodon (or tilde-style servers).
Accessibility is one that rises to the forefront as a concern.

It is easy enough for someone to discover Mastodon, do a bit of roaming, and find a server they'd like to join— maybe.
But to truly adopt Kazemi's proposed method of social networking, to be a part of a small, almost local-feeling community using a Mastodon instance, would require someone with enough technical knowledge to set up a server and effectively work as a system administrator.
Running a tilde server poses similar obstacles, with the additional technical requirements of knowing how to move around the command line, as that's where all interaction takes place.
Due to the large difference in interface (website or mobile app vs. terminal), Mastodon presents the best solution to more mindful social networking— indeed, tilde servers may not necessarily even want to classify themselves as social networks in the most commonly understood sense of the term.

Regardless of whether this move is being undertaken by a small group of friends or a tight-knit community, the process will undeniably involve a learning curve (of variable steepness), and will inevitably require some effort and engagement on part of all participants.
For the de facto sysadmin, this is compounded by a commitment of time, maintenance, moderation, and dollars.
Is it worth it?
For certain people, this answer is yes.
As concerns regarding privacy, data ownership, surveillance, and general malaise regarding Big Tech platforms continue to rise, the trade-offs may not seem so daunting.

Practically speaking, though, I believe there are a lot of people who care about these issues, but may ultimately be kept out of these alternatives because the barrier to entry is simply too high.
And for a lot of people, this all may seem like overkill.
We have perfectly good group chats on iMessage.
There is the indisputable fact that a lot of people— nearly everyone we've ever even tangentially brushed shoulders with— are active, present, and easily reachable on these dominant modes of social media.
Our friends are all already on Twitter, on Instagram, on Facebook.
Community organizers, for example, cannot fully abandon these platforms, nor should they, if they want to reach the larger population.
And these are just some (of many) valid reasons to pause before diving headfirst into yet another online platform.

<br />

# Concluding Notes

Ultimately, I don't have a prescriptive, be-all, end-all answer, nor do I think a solution has to mean definitively choosing one over the other.
But if there is a way to stymie the dominance of less benevolent actors and provide a space for people and ideas and fellowship to thrive, away from the outside noise, then I think it's worth a try.

The key idea that Kazemi advocates for in his guide is to use these alternate technologies to cultivate small communities— no more than "50 to 100 active users," and the fewer, the better fare.
If the larger, louder social media platforms are like megaphones broadcasting out to the rest of the world, then social servers can be the small, private neighborhoods we come home to nourish our close relationships and build up our communities.

I'd love to implement a Mastodon server in an educational setting, but also with groups of friends who are willing to give it a shot.
Something that strikes me as particularly important is widening the definition of what is possible by putting these tools in the hands of more people, not just the programmatically inclined, or an oligarchy of technocratic billionaires.
Artists, activists, and educators all play vital roles in world building, particularly when it comes to imagining and working toward a more equitable future, tearing down barriers of accessibility, and impacting the lives of many, among other transformative changes.
The more people who are aware of what is possible, the more we may see our online landscape reflect the interests of a wider and more conscionable population, rather than continuing to allow them to be shaped by profit-driven entities. 


---

<sup>[1]</sup> Munmun De Choudhury et al., [“Predicting Depression via Social Media” (2013), Association for the Advancement of Artificial Intelligence](https://www.aaai.org/ocs/index.php/ICWSM/ICWSM13/paper/view/6124/6351).

<sup>[2]</sup> Data & Society, [Media Manipulation Initiative](https://datasociety.net/research/media-manipulation/).

<sup>[3]</sup> The Guardian, [The Cambridge Analytica Files](https://www.theguardian.com/news/series/cambridge-analytica-files).

<sup>[4]</sup> Mozilla, [Internet Health Report](https://foundation.mozilla.org/en/internet-health-report/).

<sup>[5]</sup> The New York Times, ["So the Internet Didn't Turn Out the Way We Hoped. Now What?"](https://www.nytimes.com/interactive/2019/11/14/magazine/internet-future-dream.html).

<sup>[6]</sup> Paul Ford, ["I had a couple drinks and woke up with 1,000 nerds", The Message](https://medium.com/message/tilde-club-i-had-a-couple-drinks-and-woke-up-with-1-000-nerds-a8904f0a2ebf).

<sup>[7]</sup> Darius Kazemi, [Run your own social: How to run a small social network site for your friends](https://runyourown.social/).

<sup>[8]</sup> Free Software Foundation | GNU Project, ["What is Free Software? The Free Software Definition"](https://www.gnu.org/philosophy/free-sw.en.html).
