#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Thu Apr 18 20:11:27 2019

@author: amit
"""

from flask import Flask, render_template , jsonify
from data import Employee
from setup import setupData
app = Flask(__name__)

@app.route('/')
def index() :
  # return  render_template('index.html')
  return jsonify({"test" : "This is Test!"});

emp = Employee()
@app.route('/employee')
def employee():
  print('Hello world!', emp[0])
  return jsonify(emp[0]);

setupData = setupData()
@app.route('/setup')
def setup():
  return jsonify({"Setup" : "Setup is Complete !!"});


if __name__ == '__main__':
    app.run(debug=True)