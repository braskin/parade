#!/bin/bash

die () {
    echo >&2 "$@"
    exit 1
}

client=$1
user=$2
home="assets/$client"
remote_home="/usr/share/nginx/parade/"

[ "$#" -eq 2 ] || die "2 argument required, $# provided"
[ -d "$home/parade" ] || die "Directory $home/parade does not exist"

# echo "$home" "$2@parade.io:$remote_home"
scp -r "$home" "$2@parade.io:$remote_home"

#cd "$home/"
#abc=`pwd`
#local_dirs=`find ./$client ! -path . ! -path ./parade -type d`
#echo "$local_dirs"

#foo='bar/loo foo/por baz/dor'
#mkdir -p $foo
#ssh braskin@parade


# ssh braskin@parade.io << EOF
  
#   ls some_folder; 
#   ./someaction.sh 'some params'
#   pwd
#   ./some_other_action 'other params'
# EOF

# scp -r "$home/parade" "$user@parade.io:/usr/share/nginx/parade/$client/parade"

# if [ -d "$home/parade" ]; then
#   echo "EXISTS"
# else
#   echo "NO VALID DIRECTORY FOUND"
#   exit
# fi






