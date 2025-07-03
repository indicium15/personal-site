---
layout: post
title: "Open Source Web Apps for Sports Event Tracking"
date: 2025-07-03
categories: PROJECTS
tags: projects
comments: true
---

Data has never been more accessible in sports analytics. Companies like [Hudl Statsbomb](https://www.hudl.com/en_gb/products/statsbomb), [Second Spectrum](https://www.linkedin.com/company/second-spectrum/), and [Opta](https://theanalyst.com/) provide in-depth coverage of almost every sport and well-known league in the world, available through [released datasets](https://github.com/statsbomb/open-data), data scraping, or commercial licenses. But how would you go about collecting data for grassroots teams or less popular sports, when there's no vendor available? 

When push comes to shove and data needs to be collected manually, open source data collection tools can make a cumbersome process much easier. After completing my [undergraduate research work in football analytics](https://chaitanyajadhav.com/publication/2023/05/31/ureca-2022/), I worked with Assoc. Prof John Komar to create web applications that simplify data collection across various sports.

## Available Sports
### Football
<p class="full-width"><img src="{{'/'|relative_url}}assets/data-collection-apps/football.png" alt="Screenshot of Football Event Tracker" align="center"/></p>
Available at [splxgoal-jkomar.pythonanywhere.com](https://splxgoal-jkomar.pythonanywhere.com/), the football event tracker was the first application to be developed. After a few development iterations, it now contains the following features:

1. A timer to record the timestamp of session events
2. Keyboard shortcut support for faster tagging
3. Event customization 
4. Home and away player name and jersey number customization
5. An expected goals and expected save model for shots

After tagging events, users can download a CSV with event information and a PDF report containing the plots of the actions taken by each player during the session.

### Tennis
<p class="full-width"><img src="{{'/'|relative_url}}assets/data-collection-apps/tennis.png" alt="Screenshot of Tennis Event Tracker" align="center"/></p>
Available at [tennis-dash-jkomar.pythonanywhere.com](https://tennis-dash-jkomar.pythonanywhere.com/), this web app builds upon the features of the football tracker while incorporating relevant data fields such as Grip and Outcome.

### Floorball
<p class="full-width"><img src="{{'/'|relative_url}}assets/data-collection-apps/floorball.png" alt="Screenshot of Floorball Event Tracker" align="center"/></p>
Available at [dash-jkomar.pythonanywhere.com](https://dash-jkomar.pythonanywhere.com/), this web app is not as fleshed out as the previous sports. However, it is still a functioning tool that can provide users with accurate coordinates with respect to the dimensions of a floorball court. 

## What's Next?
I've identified a few ways in which these applications can be improved:

1. Refactoring the application to fit all sports into a single website.
2. Finding a user-friendly way to integrate video displays of sessions in the web app alongside the existing UI.
3. Adding advanced metrics that are calculated based on the collected events for each sport.

User feedback is also essential in developing these applications. If you have any suggestions, feel free to reach out via [email](mailto:chaitanya.jadhav15@hotmail.com) or [Linkedin](https://www.linkedin.com/in/chaitanya-jadhav-134392191/).