---
layout: page
title: joint impedance estimation
description: using machine learning to estimate joint mechanical impedance
category: research
img: /assets/img/projects/impedance_ml/concept_illustration.png
---

<div class='row'>
    <div class="col-sm-8 mt-3 mt-md-0">
        <h3> forecasting gait kinetics and kinematics for biological joint impedance estimation using machine learning</h3>
        <p><strong>lab:</strong> <a href="https://neurobionics.robotics.umich.edu">Dr. Elliott Rouse's Neurobionics lab at the University of Michigan</a><br>
        <strong>recent poster: </strong> <a href="{{ '/assets/pdf/rehabweek_2025.pdf' | relative_url }}" class="mybtn btn-sm z-depth-0" role="button">PDF</a></p>
        <hr>
        <p>
            Estimating biological dynamic joint impedance typically requires an amount of subject data that can be prohibitive for demanding tasks and/or impaired participants. As in our case, with hemiparetic stroke survivors, reducing data requirements while maintaining the reliability of our estimates as much as possible is critical to being able to make the most of the data we collect. We thus propose a method of using machine learning to develop a kinetic and kinematic gait prediction model that can be used to forecast nonperturbed torque and angle profiles as a substitute for ‘bootstrapping’, a method of estimating joint impedance used in previous works. With bootstrapping, average unperturbed and perturbed torque and profiles are used to find the torque and angle reactions to perturbations, T_p and \theta_p. This approach is not ideal for our study for two main reasons: 1) The amount of data needed from each participant to make statistically significant estimates would be difficult to collect from our participants considering their level of impairment. 2) variations in torque and angle profiles from stride to stride will impact how representative averaged profiles are of the participants gait in the case of participants with hemiparetic stroke. Our proposed method addresses these issues by leveraging the model to enable us to make predications on a stride-by-stride basis. This allows for the added benefit of estimating not only the average impedance parameters for each participant but also their variance from stride to stride. 
        </p>
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/impedance_ml/concept_illustration.png" title="cad" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            neural network forecasting
            method using torque and angle inputs to
            predict reactions to perturbation for
            estimating joint impedance parameters
        </div>
    </div>
</div>