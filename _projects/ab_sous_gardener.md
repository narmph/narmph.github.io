---
layout: page
title: the sous gardener
description: keep your green babies alive and thriving with almost no effort at all
category: undergraduate classes
img: /assets/img/projects/sous_gardener/diagram.png
---

<div class="row">
    <div class="col-sm-8 mt-3 mt-md-0">
        <h3>sous gardener i</h3>
        <p><strong>class:</strong> <a href="https://me.berkeley.edu/wp-content/uploads/2019/03/ME-100-rev-10.31.18.pdf">Electronics for Internet of Things</a><br>
        <strong>term:</strong> spring 2022</p>
        <hr>
        <p>A small flowerpot with an embedded moisture sensor and NFC tag. When you tap the flowerpot with your phone it takes you to a webpage with live readouts from the moisture sensor and tells you if you need to water your plant. We used <a href= 'https://micropython.org'>micropython</a> with an <a href= 'https://learn.adafruit.com/adafruit-huzzah32-esp32-feather/overview'>ESP32 microcontroller</a> and <a href= 'https://learn.adafruit.com/adafruit-stemma-soil-sensor-i2c-capacitive-moisture-sensor/overview'>I2C capacitive moisture sensor</a></p>.
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/sous_gardener/first.jpg" title="rough hardware prototype" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            a rough hardware prototype
        </div>  
    </div>
</div>

<div class="row">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/sous_gardener/diagram.jpg" title="rough hardware prototype" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            a mock up of the sous gardener ii
        </div>  
    </div>
    <div class="col-sm-8 mt-3 mt-md-0">
        <h3>sous gardener ii</h3>
        <p><strong>class:</strong> <a href="https://me.berkeley.edu/wp-content/uploads/2019/01/ME-235.pdf">Design of Microprocessor-Based Mechanical Systems</a><br>
        <strong>term:</strong> spring 2023 <br>
        <strong>write up: </strong><a href="{{ '/assets/pdf/ME135_Final_Report.pdf' | relative_url }}" class="mybtn btn-sm z-depth-0" role="button">PDF</a></p>
        <hr>
        <p>An upgrade to the sous gardener to also track light levels and actuate a pump or a grow-light when the soil is too dry or the plant isn’t getting enough light. All with a new GUI in Labview that allows you to manually toggle the grow-light and pump and track light moisture levels in real time. This project was initially supposed to be a group project but due to drops and low attendance I ended up doing it entirely on my own. I only ended up being able to build the hardware components and the GUI and didn't get to integrate it into a planter like I wanted to. </p>.
    </div>
</div>