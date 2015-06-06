---
layout: page
title: Alpaca Prices
permalink: /alpaca/prices/
---

##April 2014 Price List

Some lines are still being stockpiled and Cashmere Connections are still investing in market development both here in Australia and more recently overseas.

All prices are AUD$ per kilogram greasy fibre including GST; delivered to Cashmere Connections or to [designated depots][depots_page]. There are no classing charges.  
However any bale weighing less than 75kg is NOT eligible for free transport to Cashmere Connections' Factory from the designated transport depot. The cost of bales weighing less than 75kg must be worn by the producer.

Please consign your bellies, necks and cria fleeces. These fleece types have value.You will be paid according to the line into which they are inter-lotted.

In order to be accepted into spinning lines, the entire fleece must have a minimum length of 80 mm. All short and hairy fibre must be removed from the fleece.

###Huacaya

<!-- Replace with divs ? -->
<table>
	<tr><th>Fibre type</th><th>Micron (μm)</th><th>Length (mm)</th><th>White ($AUD)</th><th>Other Colour ($AUD)</th></tr>
	{% for price in site.data.huacaya-prices %}
	<tr><td>{{ price.name }}</td><td>{{ price.micron }}</td><td>{{ price.length }}</td><td>{{ price.white-price }}</td><td>{{ price.colour-price }}</td></tr>
	{% endfor %}
</table>

*¹ _To be eligible for classing into this line, fleece must be consigned so it is easy to separate. Plastic bags or paper between fleeces are two acceptable consignment methods._  
*² _Any fibre with heavy VM will be valued at 50% of the main line value._

###Suri

<table>
	<tr><th>Fibre type</th><th>Micron (μm)</th><th>Length (mm)</th><th>White ($AUD)</th><th>Other Colour ($AUD)</th></tr>
	{% for price in site.data.suri-prices %}
	<tr><td>{{ price.name }}</td><td>{{ price.micron }}</td><td>{{ price.length }}</td><td>{{ price.white-price }}</td><td>{{ price.colour-price }}</td></tr>
	{% endfor %}
</table>


*¹_Any fibre with heavy VM will be valued at 50% of the main line value._

[depots_page]:/deports/