---
title: Torben Braga
description : "Burschi Boy"
---

Choose which content to see across the page. Very handy for providing code
snippets for multiple languages or providing configuration in different formats.

## Code example

	Fackelumzüge, Trommelwirbel, Gleichschritt: So feiern Burschenschafter sich selbst
	
	AfD-Nachwuchs-Chef redet Höcke nach dem Mund
	...
	Die Deutsche Burschenschaft gelte inzwischen als „Kaderschmiede“ für die AfD, da die Partei hier Personen mit akademischer Ausbildung und nationalistischer Einstellung finden würde. Und Braga stellt nicht nur die Gemeinsamkeiten zwischen Burschenschaft und AfD klar heraus. Er tut dies auch mit Vokabeln wie „Schuldkult“, die klar dem rechtsextremen Milieu zugeordnet werden. Partei und Burschenschaft stünden für eine „differenzierte Wahrnehmung der deutschen Geschichte“, es brauche einen „selbstbewussten Umgang mit unserer Kultur, mit unserer Tradition“, so Braga.
	
	Stein gab das Interview im Mai beim „Burschentag“ in Eisenach, wo die Mitglieder sich selbst bei Fackelumzügen, Trommelwirbel und im Gleichschritt feierten. Mit dabei: Torben Braga sowie Damian Lohr. Braga ist Pressesprecher des Thüringer AfD-Landesverbandes, Lohr Bundesvorsitzender der AfD-Nachwuchsorganisation „Junge Alternative“ und zudem Landtagsabgeordneter in Rheinland-Pfalz.

#### [Quelle: Focus.de Schockierende TV-Dokumentation„Mitgliedschaft Frage des Blutes“: Burschenschaften als neue AfD-Kaderschmiede ](https://www.focus.de/politik/deutschland/schockierende-tv-dokumentation-mitgliedschaft-frage-des-blutes-burschenschaften-als-neue-afd-kaderschmiede_id_9778486.html)






Renders as:

{{< tabs >}}
{{% tab name="python" %}}
```python
print("Hello World!")
```
{{% /tab %}}
{{% tab name="R" %}}
```R
> print("Hello World!")
```
{{% /tab %}}
{{% tab name="Bash" %}}
```Bash
echo "Hello World!"
```
{{% /tab %}}
{{< /tabs >}}

Tab views with the same tabs that belong to the same group sychronize their selection:

{{< tabs >}}
{{% tab name="python" %}}
```python
print("Hello World!")
```
{{% /tab %}}
{{% tab name="R" %}}
```R
> print("Hello World!")
```
{{% /tab %}}
{{% tab name="Bash" %}}
```Bash
echo "Hello World!"
```
{{% /tab %}}
{{< /tabs >}}

## Config example

	{{</* tabs groupId="config" */>}}
	{{%/* tab name="json" */%}}
	```json
	{
	  "Hello": "World"
	}
	```
	{{%/* /tab */%}}
	{{%/* tab name="XML" */%}}
	```xml
	<Hello>World</Hello>
	```
	{{%/* /tab */%}}
	{{%/* tab name="properties" */%}}
	```properties
	Hello = World
	```
	{{%/* /tab */%}}
	{{</* /tabs */>}}

Renders as:

{{< tabs groupId="config" >}}
{{% tab name="json" %}}
```json
{
  "Hello": "World"
}
```
{{% /tab %}}
{{% tab name="XML" %}}
```xml
<Hello>World</Hello>
```
{{% /tab %}}
{{% tab name="properties" %}}
```properties
Hello = World
```
{{% /tab %}}
{{< /tabs >}}

{{% notice warning %}}
When using tab views with different content sets, make sure to use a common `groupId` for equal sets but distinct
`groupId` for different sets. The `groupId` defaults to `'default'`.  
**Take this into account across the whole site!**  
The tab selection is restored automatically based on the `groupId` and if it cannot find a tab item because it came
 from the `'default'` group on a different page then all tabs will be empty at first.
{{% /notice %}}
