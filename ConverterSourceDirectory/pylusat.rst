.. role:: raw-html-m2r(raw)
   :format: html


PyLUSAT for QGIS
================

The **Python for Land-use Suitability Analysis Tools** (PyLUSAT) is an
open-source Python package dedicated for GIS-based land-use suitability
modeling.
This QGIS plugin provides interfaces to all functions in PyLUSAT to
allow easy access and better integration into the QGIS *processing
framework*.


.. image:: screenshot/pylusatq_native.png
   :target: screenshot/pylusatq_native.png
   :alt: pylusatq


For more information of PyLUSAT toolkit: https://github.com/chjch/pylusat or https://pypi.org/project/pylusat/

Requirements
------------


* Windows (Windows 7, Windows 10 recommended) or macOS.
* *QGIS version* 3.16 or higher (recommended).

Installation
------------

1. Set up PyLUSAT
^^^^^^^^^^^^^^^^^

**In Windows:**


#. 
   We suggest two ways to set up your computer for PyLUSAT.\ :raw-html-m2r:`<br>`
   **For beginners:** :raw-html-m2r:`<ol type="a">
      <li> Visit <a href="https://github.com/chjch/pylusat-qgis">PyLUSAT 
      GitHub repository</a>. Click <b>Code</b>, and then <b>Download ZIP</b> 
      to download the <i>pylusat-qgis</i> repository.<br>
      <li>Copy `pylusat_installer.bat`, paste it under QGIS folder in your 
      system. 
      <li><b>Right Click</b> the copied <i>pylusat_installer.bat</i> to 
      <b>Run as administrator</b>.
   </ol>`\ :raw-html-m2r:`<br>`

   **OR, if you are familiar to work with terminals:**\ :raw-html-m2r:`<br>`
      Visit :raw-html-m2r:`<a href="https://github.com/chjch/pylusat-qgis">PyLUSAT
      GitHub repository</a>`.
      Copy and paste the code in *pylusat_installer.bat* to your terminal 
      under the QGIS folder and run it.\ :raw-html-m2r:`<br>`

   ..

      **Note**\ :\ :raw-html-m2r:`<br>`
      The ``pylusat_installer.bat`` file helps you clean your environment and
      install proper pre-required packages. Noted that: :raw-html-m2r:`<br>` 1. we use ``pipwin``
      instead of ``pip`` or ``conda`` considering the compatibility of QGIS and the
      packages.\ :raw-html-m2r:`<br>` 2. we apply ``pipwin refresh`` to force a cache rebuild in case
      any potential conflicts.\ :raw-html-m2r:`<br>` For more information about the PyLUSAT
      plugin, please visit https://github.com/chjch/pylusat.


#. 
   In the pop-up window:


   .. raw:: html

      <ol type="a">
         <li><b>Specify your root folder of QGIS</b>:
         The same where you place the installer.
         <li><b>Is the QGIS a long term release [Y/N]</b>:
         Refer to the version you installed. Type <b>Y</b> for long term release.
         <b>N</b> for short term release.</li>
      </ol>


#. Press **Enter** key and wait for the installation to complete.

**In macOS:**
Use ``pip install pylusat`` in Python Command Prompt of **QGIS**.

2. Install PyLUSAT plugin
^^^^^^^^^^^^^^^^^^^^^^^^^


#. Download **PyLUSAT plugin**
   from https://plugins.qgis.org/plugins/pylusatq/
#. Find **Plugins** on the top panel in your **QGIS Desktop**\ ,
   Click **Manage and install plugins...**
#. In **Install from ZIP** interface,
   browse and select the PyLUSAT ZIP file you download.
#. Click Install Plugin, once finished, restart QGIS.
   ..

      **Note:**\ :raw-html-m2r:`<br>`
      Once you click **Install Plugin**\ , you might see a pump-up window
      noticing "Couldn't load plugin pylusatq".
      Don't worry, the installation will succeed after you restart QGIS.


#. Now you can find PyLUSAT tools in **Processing Toolbox** panel.
